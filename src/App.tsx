import { useState } from 'react'
import words from './assets/wordlist.json'
import './App.scss'
import HangmanDrawing from './components/HangmanDrawing/HangmanDrawing'
import HangmanWord from './components/HangmanWord/HangmanWord'
import Keyboard from './components/Keyboard/Keyboard'

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  console.log(wordToGuess);
  
  return (
    <div className='app'>
      <p className="app__win-lose"> Lose Win </p>
      <HangmanDrawing />
      <HangmanWord />
      <Keyboard />

    </div >
  )
}

export default App
