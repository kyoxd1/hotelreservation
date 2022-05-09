import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import SearchPage from './components/SearchPage';
import { Counter } from './features/counter/Counter';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/search" element={<SearchPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
