import React from 'react'
import Keypad from './keypad';

const Screen = ({value, prevValue}) => {
  return (
    <div>
    <div className='main-screen'>
      <input type="text" className="calculator-input previous" id="screen" value={prevValue} readonly/>
    </div>
    <div className="calculator-screen">
    <input type="text" className="calculator-input" id="screen" value={value} readonly/>
    </div>
    </div>
  )
}

export default Screen;