import React from 'react';
import './App.css';
import MyComponent from './components/MyComponent';

function App() {
  let name='리액트'
  return (
    <div className="App">
      <h1>Hello 리액트</h1>
                <MyComponent name={name} value={500}/>
                
  
              
    </div>
  );
}

export default App;
