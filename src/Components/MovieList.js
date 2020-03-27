import React from "react";
import { connect } from "react-redux";
import MovieCard from './MovieCard/MovieCard'

import {Col} from 'reactstrap'


    
function MovieList (props){
return (
  <Col>
    <div className="movie-list">
      {props.movieData
        .filter(el =>
          el.title.toLowerCase().includes(props.searchInput.toLowerCase())
        )

        .map((el, i) => (
          <MovieCard movie={el} key={i} />
        ))}
    </div>
  </Col>
);
    }

const mapStateToProps =state =>{
 return { movieData: state.movieData,
          searchInput:state.searchInput
};
}


export default connect(mapStateToProps)(MovieList);
