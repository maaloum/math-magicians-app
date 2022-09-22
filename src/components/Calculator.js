import React, { useState, useEffect } from 'react';
import './claculator.css';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const [display, setDisplay] = useState('0');
  useEffect(() => {
    const { total, next } = state;

    if (!next && !total) setDisplay('0');
    else setDisplay(next ?? total);
  }, [state]);

  const handleChange = (event) => {
    const id = event.target.textContent.trim();
    setState((prevState) => ({ ...calculate(prevState, id) }));
  };

  const container = {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    gap: '10px',
    marginTop: '50px',
  };
  const p = {
    color: 'black',
    fontSize: '20px',
  };

  return (
    <div style={container}>
      <p style={p}>Let&apos;s do some math!</p>
      <div className="claculator">
        <div className="result">
          {display}
        </div>
        <div className="panel">
          <button onClick={handleChange} type="submit" id="allClear" className="btn"> AC </button>
          <button onClick={handleChange} type="submit" id="switchSign" className="btn"> +/- </button>
          <button onClick={handleChange} type="submit" id="percent" className="btn "> % </button>
          <button onClick={handleChange} type="submit" id="division" className="operation"> ÷ </button>
        </div>
        <div className="panel">
          <button onClick={handleChange} type="submit" id="btn7" className="btn"> 7 </button>
          <button onClick={handleChange} type="submit" id="btn8" className="btn"> 8 </button>
          <button onClick={handleChange} type="submit" id="btn9" className="btn"> 9 </button>
          <button onClick={handleChange} type="submit" id="multiplication" className="operation"> x </button>
        </div>
        <div className="panel">
          <button onClick={handleChange} type="submit" id="btn4" className="btn"> 4 </button>
          <button onClick={handleChange} type="submit" id="btn5" className="btn"> 5 </button>
          <button onClick={handleChange} type="submit" id="btn6" className="btn"> 6 </button>
          <button onClick={handleChange} type="submit" id="sub" className="operation"> - </button>
        </div>
        <div className="panel">
          <button onClick={handleChange} type="submit" id="btn1" className="btn"> 1 </button>
          <button onClick={handleChange} type="submit" id="btn2" className="btn"> 2 </button>
          <button onClick={handleChange} type="submit" id="btn3" className="btn"> 3 </button>
          <button onClick={handleChange} type="submit" id="addition" className="operation"> + </button>
        </div>
        <div className="panel">
          <button onClick={handleChange} type="submit" className="zero"> 0 </button>
          <button onClick={handleChange} type="submit" className="btn"> . </button>
          <button onClick={handleChange} type="submit" className="operation"> = </button>
        </div>

      </div>
    </div>

  );
}

export default Calculator;
