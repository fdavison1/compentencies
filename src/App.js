import React from 'react';
import './App.css';
import Todo from './components/Todo'
import Basic from './components/Basic'

function App() {
  return (
    <div className="App">
      <header>
        <i class="fas fa-tasks"></i>
        <h1>home</h1>
      </header>
      <Todo />
      <Basic />
    </div>
  );
}

export default App;
