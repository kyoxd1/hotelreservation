import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import SearchPage from './components/SearchPage';
import { Counter } from './features/counter/Counter';

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <SearchPage/>
    </div>
  );
}

export default App;
