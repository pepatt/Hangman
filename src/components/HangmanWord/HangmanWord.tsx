import React from 'react'
import './HangmanWord.scss'

function HangmanWord() {
    const word = "test";
    const guessedLetters = ["t", "e"];
  return (
    <div className='word'> 
        {word.split("").map((letter, index) => (
            <span className='word__letter' key={index} >
                <span className= {`word__letter-${guessedLetters.includes(letter) ? `visible` : `hidden`}`}>{letter}</span>
            </span>
        ))} 
    </div>
  )
}

export default HangmanWord