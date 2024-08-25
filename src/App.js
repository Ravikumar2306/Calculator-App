import './App.css';
import React, {useEffect, useState} from 'react';
import Keypad from './components/keypad.js';
import Screen from './components/screen.js';

function App() {
  
  const [value, setValue] = useState('');

  const handleClick = (val) => {
    switch(val) {
      case 'all-clear':
        setValue('');
      break;
      case '=':
        try {
          setValue(eval(value));
        } catch {
          setValue('Error');
        }
      break;
      case 'Backspace':
        setValue(String(value).slice(0, -1));
      break;
      default:
        setValue(value + val);
        break;
    }
  }

  const handleKeyDown = (event) => {
    const {key} = event;
    switch(key) {
      case 'Escape':
        handleClick('all-clear');
      break;
      case 'Enter':
        handleClick('=');
      break;
      case 'Backspace':
        handleClick('Backspace');
      break;
      case '+':
      case '-':
      case '*':
      case '/':
      case '.':
        handleClick(key);
      break;
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        handleClick(key);
      break;
      default:
        break;
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
        window.removeEventListener('keydown', handleKeyDown);
    };
}, [value]);

  return (
    <div className="calculator">
        <Screen value={value} />
        <Keypad handleClick={handleClick} />
    </div>
  );    
}

export default App;
