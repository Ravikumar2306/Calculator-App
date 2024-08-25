import React from 'react'
import Keypad from './keypad';

const Screen = ({value}) => {
  return (
    <div className="calculator-screen">
    <input type="text" className="calculator-input" id="screen" value={value} readonly/>
    </div>
  )
}

export default Screen;