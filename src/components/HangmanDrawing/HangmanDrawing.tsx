import React from 'react'
import './HangmanDrawing.scss'

type HangmanDrawingProps = {
    numberOfGuesses: number;
} 

function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps ) {
    const HEAD = (
        <div className='HEAD'></div>
    )

    const BODY = (
        <div className='BODY'></div>
    )

    const RIGHT_ARM = (
        <div className='RIGHT_ARM'></div>
    )
    const LEFT_ARM = (
        <div className='LEFT_ARM'></div>
    )
    
    const RIGHT_LEG = (
        <div className='RIGHT_LEG'></div>
    )
    const LEFT_LEG = (
        <div className='LEFT_LEG'></div>
    )

    const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

  return (
    <div className = 'drawing'>
        {BODY_PARTS.slice(0, numberOfGuesses)}
        <div className="drawing__hook"></div>
        <div className="drawing__top"></div>
        <div className="drawing__upright"></div>
        <div className="drawing__bottom"></div>
    </div>
  )
}

export default HangmanDrawing