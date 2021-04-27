import '../style/App.css';
import React, { useContext, useState } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'



// Import components application
import Navigation from './Navigation'
import Content from './Content'
import Footer from './Footer'
import YouMustLog from '../components/PromptMustLog'

// Importing data from ReactContext
import { AppContext, defaultObject } from "../context/AppContext";

// Symulacja dostępu do bazy danych 
import { moviesDatabase } from '../database/Movies'

const App = () => {

  const [allMovies, setAllMovies] = useState(defaultObject.databaseMovies);
  const [cardMovies, setCardMovies] = useState(defaultObject.myLikedMovies);
  
  // Tworzenie zmiennych dla szukanej wartości orad funkcji obsługującej
  const [ searchMovie, setSearchMovie ] = useState(defaultObject.search);
  const changeInputSearchMovie = (typingData) => {setSearchMovie(typingData)};

  const [login, setLogin ] = useState(defaultObject.isLogged)
  const changeValueLogin = (value) => { setLogin(value) }

  const [user, setUser] = useState({ name:'', surname:'', age:'', login:'', email:'' })
  const settingUserInfo = (obj) => {setUser(obj)}

  // Obsługa dodawania filmów do ulubionych
  const [likedMovies, setLikedMovies] = useState([])


  const [flagPrompt, setFlagPrompt] = useState(false);
  const setFlagFunction = () => { setFlagPrompt(false) }
  const addToCardMovie = (movie) => { 
    if(login) {
    const tab = [...likedMovies];
    likedMovies.includes(movie) ? console.log("The movie is in your collection.") : tab.push(movie);
    setLikedMovies(tab)
    }
    else {
      setFlagPrompt(true)
    }
  }
  const removeFromCardMovie = (index) => { 
    const tab = [...likedMovies];
    const position = tab.findIndex(item => item.lp === index);
    tab.splice(position, 1);
    setLikedMovies(tab)
   }

  // Symulacja bazy danych z filmami
  const movies = moviesDatabase ? moviesDatabase : []

  return ( 

      <AppContext.Provider value={{
        databaseMovies: allMovies,
        search: searchMovie,
        typpingSearchText: changeInputSearchMovie,
        isLogged: login,
        setLogging: changeValueLogin,
        loggedUser: user,
        settingInfoUser: settingUserInfo,
        moviesDatabase: movies,
        myLikedMovies: likedMovies,
        addLikedMovie: addToCardMovie,
        removeLikedMovie: removeFromCardMovie
      }}>
        <Router>    
          <Navigation/>  
          <Content/>
          <Footer />
          {flagPrompt ? <YouMustLog closePrompt={setFlagFunction} /> : null}
        </Router>
      </AppContext.Provider>
   );
}
 
export default App;






















/*
class App extends PureComponent {
  state = { 
    allMovies: defaultObject.databaseMovies,
    cardMovies: defaultObject.myLikedMovies,
    searchMovie: defaultObject.search,
    fnkSearchMovie: defaultObject.typpingSearchText,
   }

   setState({})

  render() { 
    return ( 
      <div className="main-body-app"> 
      <AppContext.Provider value={{
        databaseMovies: this.state.allMovies,
        myLikedMovies: this.state.myLikedMovies
      }}>
        <Router>    
          <Navigation/>  
          <Content/>
          <Footer />
        </Router>
      </AppContext.Provider>
      </div>
     );
  }
}
 
export default App;
*/