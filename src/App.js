import React from 'react';
import './App.css';
import routes from './routes'
import { Link } from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <header>
        <Link to='/'>
        <i class="fas fa-tasks"></i>
        </Link>
        <h1>home</h1>
      </header>
      {routes}

    </div>
  );
}

export default App;
