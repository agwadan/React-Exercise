import React, { useState } from 'react';

export const QuestionOne = () => {
  const [num, setNum] = useState(0);
  return (
    <div>
      <h2>Question 1</h2>
      <h5>Display a counter on the screen. A number, with a button to increment that number.</h5>
      <p>_______________</p>
      <h4>{num}</h4>
      <button onClick={() => { setNum(num + 1) }}>Shift Up</button>
    </div>
  )
}
