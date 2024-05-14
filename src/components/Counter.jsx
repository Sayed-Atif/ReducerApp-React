import React, { useReducer } from 'react';
import reducer from './Reducer';
import '../App.css';
// Initial state
const initialState = { count: 0 };

// Component
const Counter = () => {
  // useReducer hook
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className='counter'>
      <h1 className='count'>Count: {state.count}</h1>
      <button className='button' onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button className='button' onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      <button className='button' onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
      <button className='button' onClick={() => dispatch({ type: 'INCREMENT_BY_AMOUNT', payload: 5 })}>Increment by 5</button>
      <button className='button' onClick={() => dispatch({ type: 'DECREMENT_BY_AMOUNT', payload: 5 })}>Decrement by 5</button>
    </div>
  );
};

export default Counter;