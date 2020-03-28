import React from "react";
import Rating from "../Rating";
import { deleteMovie, editMovie } from "../../JS/Actions/Actions";
import "./Card.css"
import MovieEdit from "../movieEdit";
import { connect } from "react-redux";
import { Card, CardImg, CardTitle, CardBody, Button } from "reactstrap";
import { Link } from "react-router-dom";

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
          <Link to={`/Description/${props.movie.id}`}>
            <Button variant="outline-danger">Description</Button>
          </Link>
          <Rating count={props.movie.rating}></Rating>
          <Button
            color="danger"
            onClick={() => props.deleteMovie(props.movie.id)}
          >
            Delete
          </Button>
          <MovieEdit movie={props.movie} />
        </CardBody>
      </Card>
    </div>
  );
}
export default connect(null, { deleteMovie, editMovie })(MovieCard);
