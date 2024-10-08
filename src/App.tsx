import { useState, useEffect, useCallback } from 'react'
import words from './assets/wordlist.json'
import './App.scss'
import HangmanDrawing from './components/HangmanDrawing/HangmanDrawing'
import HangmanWord from './components/HangmanWord/HangmanWord'
import Keyboard from './components/Keyboard/Keyboard'

function getWord() {
  return words[Math.floor(Math.random() * words.length)]
}

function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord)

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter( 
    letter => !wordToGuess.includes(letter) 
  );

  const isLoser = incorrectLetters.length >= 6
  const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter))

  const addGuessedLetter = useCallback((letter: string) => {
    if(guessedLetters.includes(letter) || isLoser || isWinner) return

    setGuessedLetters(currentLetters => [...currentLetters, letter])
  }, [guessedLetters, isWinner, isLoser])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key

      if( !key.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessedLetter(key)
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [guessedLetters])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key

      if(key !== "Enter") return

      e.preventDefault()
      setGuessedLetters([])
      setWordToGuess(getWord())
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [])
  
  return (
    <div className='app'>
      <p className="app__win-lose">
         {isWinner && "Winner! - refresh to try again"}
         {isLoser && "Nice try - refresh to try again"}
         </p>
      <HangmanDrawing numberOfGuesses = {incorrectLetters.length} />
      <HangmanWord reveal = {isLoser} guessedLetters = {guessedLetters} wordToGuess = {wordToGuess}/>
      <div className="keybLayout">
        <Keyboard 
          disabled = {isWinner || isLoser}
          activeLetters = {guessedLetters.filter(letter => 
          wordToGuess.includes(letter))} 
          inactiveLetters = {incorrectLetters}
          addGuessedLetter = {addGuessedLetter}
          />
      </div>
    </div >
  )
}

export default App