import React from "react";
import Rating from "../Rating";
import { deleteMovie, editMovie } from "../../JS/Actions/Actions";
import "./Card.css"

import { connect } from "react-redux";
import { Card, CardImg, CardTitle, CardBody, Button } from "reactstrap";

function MovieCard(props) {
  return (
    <div className="movie-card">
      <Card style={{ width: "20rem" }}>
        <CardImg
          top
          src={props.movie.poster}
          alt={props.movie.title}
          className="Card"
        />

        <CardBody>
          <CardTitle>{props.movie.title}</CardTitle>

          <Rating count={props.movie.rating}></Rating>
          <Button
            color="danger"
            onClick={() => props.deleteMovie(props.movie.id)}
          >
            Delete
          </Button>
          <Button
            color="success"
            onClick={() => props.editMovie(props.movie.id)}
          >
            Edit
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}
export default connect(null, { deleteMovie, editMovie })(MovieCard);
