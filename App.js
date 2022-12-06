import React from 'react';
import './App.css';
import {Header} from './components/Header/Header.jsx';
import { Searchbar } from './components/Header/Searchbar/Searchbar';
import {CardSet} from './components/Header/ItemCard/CardSet';
import {Filter} from './components/Header/Filter/Filter';

function App() {
  return (
    <div className="App">
      <Header/>
      <Searchbar/>
      <Filter/>
      <CardSet/>
    </div>
  );
}

export default App;
