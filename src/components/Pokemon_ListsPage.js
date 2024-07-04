import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import logo from './International_Pokémon_logo.svg.png';
import '../css/Styles.css';

const PokemonList = ({ addToPocket }) => {
  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);
  const [displayMode, setDisplayMode] = useState('list');

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/type')
      .then(response => response.json())
      .then(data => setTypes(data.results))
      .catch(error => console.error('Error fetching types:', error));

    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => response.json())
      .then(data => {
        const fetches = data.results.map(pokemon =>
          fetch(pokemon.url).then(response => response.json())
        );
        Promise.all(fetches).then(pokemonDetails => setPokemons(pokemonDetails));
      })
      .catch(error => console.error('Error fetching Pokémon:', error));
  }, []);

  const toggleView = () => {
    setDisplayMode(prevMode => prevMode === 'list' ? 'grid' : 'list');
  };

  return (
    <div className="bg-yellow">
          <div className="bg">
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">Welcome to Pokemon shop!</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a href="#login">Contact 123456</a>
          </Navbar.Text>
          <span className="mx-3">
            <Navbar.Text>
              <a href="#login">Track Your order</a>
            </Navbar.Text>
          </span>
          <Navbar.Text>
            <a href="#login">All Offers</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              src={logo}
              width="150"
              height="50"
              className="d-inline-block align-top me-5"
              alt="Pokemon List Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex ms-auto">
              <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
        <div>
          <Navbar className="ms-auto">
            <Link to="#" className="me-3" style={{ textDecoration: 'none' }}>username</Link>
            <Link to="/pocket" className="me-3" style={{ textDecoration: 'none' }}>Pocket</Link>
          </Navbar>
        </div>
      </Navbar>
      <div className="d-flex justify-content-end mt-4">
        <Button variant="dark" onClick={toggleView}>
          {displayMode === 'list' ? 'Show Pokémon Grid' : 'Show Pokémon List'}
        </Button>
      </div>

      <Container fluid className="mt-4">
        <div className="row">
          {displayMode === 'list' ? (
            // Display as List
            pokemons.map(pokemon => (
              <div key={pokemon.name} className="col-md-3 mb-4">
                <div className="border p-4 text-center">
                  <Link to={`/pokemon/${pokemon.name}`} style={{ textDecoration: 'none' }}>
                    <img
                      src={pokemon.sprites.front_default}
                      alt={pokemon.name}
                      className="w-100 mb-3"
                    />
                    <h2 className="text-center pokemon-name"style={{ textDecoration: 'none' }}>{pokemon.name}</h2>
                  </Link>
                  <Button variant="dark" className="mt-2" onClick={() => addToPocket(pokemon)}>Add to Pocket</Button>
                </div>
              </div>
            ))
          ) : (
            <div className="grid grid-cols-4 gap-4">
              {pokemons.map(pokemon => (
                <div key={pokemon.name} className="border p-4 flex items-center justify-center flex-col">
                  <Link to={`/pokemon/${pokemon.name}`} style={{ textDecoration: 'none' }}>
                    <img
                      src={pokemon.sprites.front_default}
                      alt={pokemon.name}
                      className="w-16 h-16 mr-4"
                      style={{ display: 'inline-block', verticalAlign: 'middle' }}
                    />
                    <h2 className="text-2xl pokemon-name" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                      {pokemon.name}
                    </h2>
                  </Link>
                  <Button variant="dark" className="mt-2" onClick={() => addToPocket(pokemon)}>Add to Pocket</Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default PokemonList;
