import {
  SEARCH_INPUT,
  RATING_SEARCH,
  DELETE_MOVIE,
  ADD_MOVIE,
  EDIT_MOVIE
} from "../Constants/actionTypes";

const initialState = {
  movieData: [
    {
      id: 1050,
      title: "Bad Boys For Life",
      poster:
        "https://regalcdn.azureedge.net/BadBoysforLife/HO00009996/TV_SmallPosterImage/20191125-090126975.jpg",
      rating: 5,
      trailer: "https://www.youtube.com/watch?v=jKCj3XuPG8M"
    },
    {
      id: 1205,
      title: "Mulan",
      poster:
        "https://lumiere-a.akamaihd.net/v1/images/p_mulan2020_ecd26078.jpeg?region=0%2C0%2C540%2C810",
      rating: 4,
      trailer: "https://www.youtube.com/watch?v=R-eFm--k21c"
    },
    {
      id: 20265,
      title: "Terminator",
      poster:
        "https://fr.web.img4.acsta.net/pictures/15/06/29/10/53/495349.jpg",
      rating: 5,
      trailer: "https://www.youtube.com/watch?v=jCyEX6u-Yhs"
    },
    {
      id: 336598,
      title: "Annihilation",
      poster:
        "https://media.senscritique.com/media/000017617001/source_big/Annihilation.jpg",
      rating: 4,
      trailer: "https://www.youtube.com/watch?v=uYhhGGZaAzM"
    }
  ],
  searchInput: ""
  // ratingSearch: 0
};
//eslint-disable-next-line
export default function movieReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SEARCH_INPUT:
      return {
        ...state,
        searchInput: payload
      };
    case RATING_SEARCH:
      return {
        ...state,
        ratingSearch: payload
      };
    case DELETE_MOVIE:
      console.log("payload", payload);
      return {
        ...state,
        //eslint-disable-next-line
        movieData: state.movieData.filter(el => el.id !== payload)
      };
    case ADD_MOVIE:
      return {
        ...state,
        //eslint-disable-next-line
        movieData: [...state.movieData, payload]
      };
    case EDIT_MOVIE:
      return {
        ...state,
        //eslint-disable-next-line
        movieData: state.movieData.map(el =>
          el.id === payload.id ? payload : el
        )
      };

    default:
      return state;
  }
}
