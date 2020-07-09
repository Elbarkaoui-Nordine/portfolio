import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage/Homepage';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Projects from './Projects/Projects';
import Parcours from './components/Parcours/Parcours';

function App() {
  return (
<div>
  <NavBar />
  <Profile />
  <Projects />
  <Parcours />
</div>
  );
}

export default App;
