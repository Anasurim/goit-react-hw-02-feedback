import React from 'react';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGood = () => {
    this.setState(prev => {
      return { good: prev.good + 1 };
    });
  };

  handleNeutral = () => {
    this.setState(prev => {
      return { neutral: prev.neutral + 1 };
    });
  };

  handleBad = () => {
    this.setState(prev => {
      return { bad: prev.bad + 1 };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <h3>Please leave eedback</h3>

        <button type="button" onClick={this.handleGood}>
          good
        </button>

        <button type="button" onClick={this.handleNeutral}>
          neutral
        </button>

        <button type="button" onClick={this.handleBad}>
          bad
        </button>

        <h2>Statistics</h2>

        <ul>
          <li>
            Good: <span>{good}</span>
          </li>
          <li>
            Neutral: <span>{neutral}</span>
          </li>
          <li>
            Bad: <span>{bad}</span>
          </li>
        </ul>
      </>
    );
  }
}

export default Feedback;
