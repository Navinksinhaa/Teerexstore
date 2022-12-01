import React from 'react';
import './App.css';
import {Header} from './components/Header/Header.jsx';
import { Searchbar } from './components/Header/Searchbar/Searchbar';
import {Card} from './components/Header/ItemCard/Card';

function App() {
  return (
    <div className="App">
      <Header/>
      <Searchbar/>
      <Card/>
    </div>
  );
}

export default App;
