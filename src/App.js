import React from "react";

import MovieList from "./Components/MovieList";
import Search from "./Components/Search";
import AddNewMovie from "./Components/addNewMovie";
import { editMovie } from "./JS/Actions/Actions";
import MovieEdit from "./Components/movieEdit";
import movieEdit from "./Components/movieEdit";


function App() {
  return (
    <div className="App">
      <Search />
      <MovieList />
      <AddNewMovie />
      <movieEdit />
    </div>
  );
}

export default App;
