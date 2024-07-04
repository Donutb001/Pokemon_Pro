import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import logo from "./International_Pokémon_logo.svg.png";
import "../css/Styles.css";

function PokemonDetail({ addToPocket, toggleView, displayMode }) {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setPokemon(data))
      .catch((error) =>
        console.error("Error fetching Pokémon details:", error)
      );
  }, [id]);

  if (!pokemon) return <div>Loading...</div>;

  return (
    <>
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
          <Navbar.Brand>
            <Link to="/">
              <img
                src={logo}
                width="150"
                height="50"
                className="d-inline-block align-top me-5"
                alt="Pokemon List Logo"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex ms-auto">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Link
        to="/"
        className="btnback btn-primary mt-2 ms-4"
        style={{ textDecoration: "none" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-arrow-left-square-fill"
          viewBox="0 0 16 16"
        >
          <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1" />
        </svg>{" "}
        Back
      </Link>
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold my-4">{pokemon.name}</h1>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <p>Height: {pokemon.height}</p>
        <p>Weight: {pokemon.weight}</p>
        <Button
          variant="dark"
          className="mt-2"
          onClick={() => addToPocket(pokemon)}
        >
          Add to Pocket
        </Button>
      </div>
    </>
  );
}

export default PokemonDetail;
