import { createContext } from "react";

// Tworzymy obiekt który będzie naszym kontekstem
export const defaultObject = {
  databaseMovies: [{title: "Film1"}, {title: "Film2"}],
  
  // Wyszukiwany tytuł oraz funkcja obsługująca 
  search: "",
  typpingSearchText: () => {}, 

  // Obsługa logowania
  isLogged: false,
  setLogging: () => {},
  loggedUser: {},
  settingInfoUser: () => {},

  // Symulacja zapisanych ulubionych filmów w bazie
  myLikedMovies: [],
  addLikedMovie: () => {},
  removeLikedMovie: () => {},

  // Symulacja bazy filmów
  moviesDatabase: [],
};

// Tworzymy kontekst
export const AppContext = createContext(defaultObject); // w nawiasie wartość domyślną można podać
