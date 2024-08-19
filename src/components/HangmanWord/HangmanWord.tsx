import './HangmanWord.scss'

type HangmanWordProps = {
    reveal?: boolean
    guessedLetters: string[]
    wordToGuess: string
}

function HangmanWord({reveal = false, guessedLetters, wordToGuess}: HangmanWordProps) {
  return (
    <div className='word'> 
        {wordToGuess.split("").map((letter, index) => (
            <span className='word__letter' key={index} >
                <span style={{ color: 
                    !guessedLetters.includes(letter) && reveal ? "red" : "black"
                }} 
                className= 
                {`word__letter-${guessedLetters.includes(letter) || reveal ? `visible` : `hidden`}`}
                >
                    {letter}
                </span>
            </span>
        ))} 
    </div>
  )
}

export default HangmanWord