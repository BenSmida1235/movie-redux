import React from "react";

import MovieList from "./Components/MovieList";
import Search from "./Components/Search";
import AddNewMovie from "./Components/addNewMovie";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Description from "./Components/Descrption/Description";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Search />
        <MovieList />
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route
            exact
            path="/Description/:id"
            render={props => <Description {...props} />}
          />
        </Switch>
        <AddNewMovie />
      </BrowserRouter>
    </div>
  );
}

export default App;
