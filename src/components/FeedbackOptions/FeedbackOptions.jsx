import React from 'react';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map(item => {
        return (
          <button key={item} name={item} onClick={onLeaveFeedback}>
            {item}
          </button>
        );
      })}
    </div>
  );
}
