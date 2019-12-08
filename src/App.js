import React from 'react';
import './App.css';
import styled from 'styled-components'
import routes from './routes'
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
text-decoration: none
color: black`

function App() {
  return (
    <div className="App">
        <StyledLink to='/'>
      <header>
        <i className="fas fa-tasks"></i>
        <h1>home</h1>
      </header>
        </StyledLink>
      {routes}

    </div>
  );
}

export default App;
