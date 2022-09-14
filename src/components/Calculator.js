import React from 'react';
import './claculator.css';

class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="claculator">
        <div className="result">
          0
        </div>
        <div className="panel">
          <button type="submit" className="btn"> AC </button>
          <button type="submit" className="btn"> +/- </button>
          <button type="submit" className="btn"> % </button>
          <button type="submit" className="operation"> / </button>
        </div>
        <div className="panel">
          <button type="submit" className="btn"> 7 </button>
          <button type="submit" className="btn"> 8 </button>
          <button type="submit" className="btn"> 9 </button>
          <button type="submit" className="operation"> x </button>
        </div>
        <div className="panel">
          <button type="submit" className="btn"> 4 </button>
          <button type="submit" className="btn"> 5 </button>
          <button type="submit" className="btn"> 6 </button>
          <button type="submit" className="operation"> - </button>
        </div>
        <div className="panel">
          <button type="submit" className="btn"> 1 </button>
          <button type="submit" className="btn"> 2 </button>
          <button type="submit" className="btn"> 3 </button>
          <button type="submit" className="operation"> + </button>
        </div>
        <div className="panel">
          <button type="submit" className="zero"> 0 </button>
          <button type="submit" className="btn"> . </button>
          <button type="submit" className="operation"> = </button>
        </div>

      </div>
    );
  }
}

export default Calculator;
