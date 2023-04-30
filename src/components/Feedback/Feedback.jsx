import React from 'react';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <>
        <h3>Please leave eedback</h3>

        <button type="button">good</button>

        <button type="button">neutral</button>

        <button type="button">bad</button>

        <h2>Statistics</h2>

        <ul>
          <li>Good</li>
          <li>Neutral</li>
          <li>bad</li>
        </ul>
      </>
    );
  }
}

export default Feedback;
