import React, {useEffect, useState} from 'react';

const Keypad = ({handleClick}) => {

  return (     
    <div className="calculator-keys">
            <button type="button" onClick={() => handleClick('9')}>9</button>
            <button type="button" onClick={() => handleClick('8')}>8</button>
            <button type="button" onClick={() => handleClick('7')}>7</button>
            <button type="button" className="operator" onClick={() => handleClick('+')}>+</button>
            
            <button type="button" onClick={() => handleClick('6')}>6</button>
            <button type="button" onClick={() => handleClick('5')}>5</button>
            <button type="button" onClick={() => handleClick('4')}>4</button>   
            <button type="button" className="operator" onClick={() => handleClick('-')}>–</button>

            <button type="button" onClick={() => handleClick('3')}>3</button>
            <button type="button" onClick={() => handleClick('2')}>2</button>
            <button type="button" onClick={() => handleClick('1')}>1</button>
            <button type="button" className="operator" onClick={() => handleClick('*')}>&times;</button>

            <button type="button" className="zero" onClick={() => handleClick('0')}>0</button>
            <button type="button" className="decimal" onClick={() => handleClick('.')}>.</button>
            <button type="button" className="operator" onClick={() => handleClick('/')}>&divide;</button>

            <button type="button" className="equal-sign operator" onClick={() => handleClick('=')}>=</button>
            <button type="button" className="all-clear" onClick={() => handleClick('all-clear')}>AC</button>
            <button type="button" className="delete" onClick={() => handleClick('Backspace')}>Delete</button>
    </div>
  )
}

export default Keypad;