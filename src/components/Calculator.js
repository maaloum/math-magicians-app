import {Component} from 'react';
import './claculator.css';
class Calculator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      result: 0
    };
  }
     render() {
      return (
      <div className="claculator">
          <div className="result"> 0
          </div>
          <div className="panel">
              <button className="btn"> AC </button>
              <button className="btn"> +/- </button>
              <button className="btn"> % </button>
              <button className="operation"> / </button>
          </div>
          <div className="panel">
              <button className="btn"> 7 </button>
              <button className="btn"> 8 </button>
              <button className="btn"> 9 </button>
              <button className="operation"> x </button>
          </div>
          <div className="panel">
              <button className="btn"> 4 </button>
              <button className="btn"> 5 </button>
              <button className="btn"> 6 </button>
              <button className="operation"> - </button>
          </div>
          <div className="panel">
              <button className="btn"> 1 </button>
              <button className="btn"> 2 </button>
              <button className="btn"> 3 </button>
              <button className="operation"> + </button>
          </div>
          <div className="panel">
              <button className="zero"> 0 </button>
              <button className="btn"> . </button>
              <button className="operation"> = </button>
          </div>

      </div>
        )}

}

export default Calculator;
