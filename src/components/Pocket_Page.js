import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import logo from "./International_Pokémon_logo.svg.png";
import "../css/Styles.css";

const Pocket = ({ pocket, clearPocket }) => {
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
        <h1 className="text-4xl font-bold my-4">My Pocket</h1>
        <div className="row">
          {pocket.length > 0 ? (
            pocket.map((pokemon, index) => (
              <div key={index} className="col-md-3 mb-4">
                <Link to={`/pokemon/${pokemon.name}`}>
                  <div className="border p-4">
                    <img
                      src={pokemon.sprites.front_default}
                      alt={pokemon.name}
                      className="w-100 mb-3"
                    />
                    <h2 className="text-center">{pokemon.name}</h2>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p className="text-center">Your pocket is empty.</p>
          )}
        </div>
        <div className="text-center">
          <Button variant="danger" onClick={clearPocket} className="m-2">
            Clear Pocket
          </Button>
          <Link to="/" className="btn btn-primary m-2">
            Back to Pokemon List
          </Link>
        </div>
      </div>
    </>
  );
};

export default Pocket;
