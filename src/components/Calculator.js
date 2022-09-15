import React from 'react';
import './claculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      display: '0',

    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    const id = event.target.textContent.trim();
    this.setState((prevState) => ({ ...calculate(prevState, id) }), this.displayOnScreen);
  }

  displayOnScreen() {
    const { total, next } = this.state;
    if (!next && !total) {
      this.setState({ display: '0' });
    } else {
      this.setState({ display: next ?? total });
    }
  }

  render() {
    const { display } = this.state;
    return (
      <div className="claculator">
        <div className="result">
          {display}
        </div>
        <div className="panel">
          <button onClick={this.handleChange} type="submit" id="allClear" className="btn"> AC </button>
          <button onClick={this.handleChange} type="submit" id="switchSign" className="btn"> +/- </button>
          <button onClick={this.handleChange} type="submit" id="percent" className="btn "> % </button>
          <button onClick={this.handleChange} type="submit" id="division" className="operation"> / </button>
        </div>
        <div className="panel">
          <button onClick={this.handleChange} type="submit" id="btn7" className="btn"> 7 </button>
          <button onClick={this.handleChange} type="submit" id="btn8" className="btn"> 8 </button>
          <button onClick={this.handleChange} type="submit" id="btn9" className="btn"> 9 </button>
          <button onClick={this.handleChange} type="submit" id="multiplication" className="operation"> x </button>
        </div>
        <div className="panel">
          <button onClick={this.handleChange} type="submit" id="btn4" className="btn"> 4 </button>
          <button onClick={this.handleChange} type="submit" id="btn5" className="btn"> 5 </button>
          <button onClick={this.handleChange} type="submit" id="btn6" className="btn"> 6 </button>
          <button onClick={this.handleChange} type="submit" id="sub" className="operation"> - </button>
        </div>
        <div className="panel">
          <button onClick={this.handleChange} type="submit" id="btn1" className="btn"> 1 </button>
          <button onClick={this.handleChange} type="submit" id="btn2" className="btn"> 2 </button>
          <button onClick={this.handleChange} type="submit" id="btn3" className="btn"> 3 </button>
          <button onClick={this.handleChange} type="submit" id="addition" className="operation"> + </button>
        </div>
        <div className="panel">
          <button onClick={this.handleChange} type="submit" className="zero"> 0 </button>
          <button onClick={this.handleChange} type="submit" className="btn"> . </button>
          <button onClick={this.handleChange} type="submit" className="operation"> = </button>
        </div>

      </div>
    );
  }
}

export default Calculator;
