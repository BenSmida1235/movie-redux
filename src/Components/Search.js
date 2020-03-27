import React from 'react'
import { connect } from 'react-redux';
import {searchHandler} from '../JS/Actions/Actions'
import './Styles.css';
const Search = (props) => {   
    return (
      <div className="Search">
        <input
          className="name-filter-button"
          type="text"
          
          onChange={e => props.searchHandler(e.target.value)}
        />
      </div>
    );
        }

export default connect(null, { searchHandler })(Search);
