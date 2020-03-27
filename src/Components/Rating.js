import React from 'react'
import { ratingSearch } from "../JS/Actions/Actions";
import { connect } from "react-redux";


const Rating = (props) => {
    let starsRate = [];
    for (let i = 0; i < 5; i++) {
      if (i < props.count) {
        starsRate.push(
          <span onClick={() => props.ratingSearch(i + 1)} key={i}>
            ★
          </span>
        );
      } else {
        starsRate.push(
          <span onClick={() => props.ratingSearch(i + 1)} key={i}>
            ☆
          </span>
        );
      }
    }
    return <div>{starsRate}</div>;
}

export default connect(null, {ratingSearch})(Rating);

