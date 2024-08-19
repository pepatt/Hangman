import './Keyboard.scss'

const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ]

type KeyboardProps = {
    disabled?: boolean
    activeLetters: string[]
    inactiveLetters: string[]
    addGuessedLetter: (letters: string) => void
}

function Keyboard({ disabled = false, activeLetters, inactiveLetters, addGuessedLetter }: KeyboardProps) {


  return (
    <div className='keyboard'>
        {KEYS.map(key => {
            const isActive = activeLetters.includes(key);
            const isInactive = inactiveLetters.includes(key);
            return (
                <button onClick={() => addGuessedLetter(key)} className = {`btn 
                    ${isActive ? "btn_active" : ""}
                    ${isInactive ? "btn_inactive" : ""}
                    `} 
                    disabled = {isInactive || isActive || disabled}
                    key = {key}>{key}</button>
            );
        })}
    </div>
  )
}

export default Keyboard