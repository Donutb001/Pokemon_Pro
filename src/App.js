import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PokemonList from './components/Pokemon_ListsPage';
import PokemonDetail from './components/Pokemon_DetailPage';
import Pocket from './components/Pocket_Page';

function App() {
  const [pocket, setPocket] = useState([]);

  const addToPocket = (pokemon) => {
    setPocket((prevPocket) => [...prevPocket, pokemon]);
  };

  const clearPocket = () => {
    setPocket([]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PokemonList addToPocket={addToPocket} />} />
        <Route path="/pokemon/:id" element={<PokemonDetail addToPocket={addToPocket} />} />
        <Route path="/pocket" element={<Pocket pocket={pocket} clearPocket={clearPocket} />} />
      </Routes>
    </Router>
  );
}

export default App;
