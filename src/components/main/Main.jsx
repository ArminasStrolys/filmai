import React from "react";
import "./main.css";
import { Container } from "react-bootstrap";
import Search from "../search/Search";
import mov from "./mov.jpg";
import Movie from "../movie/Movie";

export default function Main(props) {
  return (
    <Container>
      <h2>Movie search</h2>
      <img src={mov} alt="Movie poster"/>
      <div className="row justify-content-center">
        <Search />
        <Movie></Movie>
      </div>
    </Container>
  );
}
