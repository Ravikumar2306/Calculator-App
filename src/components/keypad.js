import React, {useEffect, useState} from 'react';

const Keypad = ({handleClick}) => {

  return (   
    <div className="calculator-keys">
      <button type="button" className="all-clear top-btn" onClick={() => handleClick('all-clear')}>C</button>
      <button type="button" className="delete top-btn" onClick={() => handleClick('Backspace')}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
</svg></button>
      <button type="button" className="percentage top-btn" onClick={() => handleClick('%')}>%</button>
      <button type="button" className="operator" onClick={() => handleClick('/')}>÷</button>
      
      <button type="button" className="oprands" onClick={() => handleClick('7')}>7</button>
      <button type="button" className="oprands" onClick={() => handleClick('8')}>8</button>
      <button type="button" className="oprands" onClick={() => handleClick('9')}>9</button>
      <button type="button" className="operator" onClick={() => handleClick('*')}><svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg></button>

      
      <button type="button" className="oprands" onClick={() => handleClick('4')}>4</button>
      <button type="button" className="oprands" onClick={() => handleClick('5')}>5</button>  
      <button type="button" className="oprands" onClick={() => handleClick('6')}>6</button>
      <button type="button" className="operator" onClick={() => handleClick('-')}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"/>
</svg></button>     

      <button type="button" className="oprands" onClick={() => handleClick('3')}>3</button>
      <button type="button" className="oprands" onClick={() => handleClick('2')}>2</button>
      <button type="button" className="oprands" onClick={() => handleClick('1')}>1</button>
      <button type="button" className="operator" onClick={() => handleClick('+')}><svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
</svg></button>

            <button type="button" className="zero oprands" onClick={() => handleClick('0')}>0</button>
            <button type="button" className="decimal oprands" onClick={() => handleClick('.')}>.</button>


            <button type="button" className="equal-sign operator" onClick={() => handleClick('=')}>=</button>
            
    </div>
  );
}

export default Keypad;