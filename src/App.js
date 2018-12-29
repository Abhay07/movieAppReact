import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieList from './MovieList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">Movies of 2018 (React)</header>
        <MovieList />
      </div>
    );
  }
}

export default App;
