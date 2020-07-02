import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage/Homepage';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Projects from './Projects/Projects';

function App() {
  return (
<div>
  <NavBar />
  <Profile />
  <Projects />
</div>
  );
}

export default App;
