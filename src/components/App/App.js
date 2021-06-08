import './App.css';
import '../../vendor/normalize.css';
import '../../fonts/fonts.css';
import { useState, useEffect } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Header from "../Header/Header";
import NotFound from "../NotFound/NotFound";
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import auth from '../../utils/auth';
import mainApi from "../../utils/MainApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";


function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [loginIsCheck, setLoginIsCheck] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  function checkLogin () {
    auth.getUserData()
      .then(data => {
        setLoggedIn(true);
        setLoginIsCheck(true);
        mainApi.getMovies()
          .then((userMovies)=>{
            setCurrentUser({...data, userMovies: userMovies})
          })
      })
      .catch(()=>{
        setLoggedIn(false);
        setLoginIsCheck(true);
      })
  }


  function addLike (movie) {
    mainApi.addMovie(movie).then(()=>{
      mainApi.getMovies()
        .then((userMovies)=>{
          setCurrentUser({...currentUser, userMovies: userMovies})
        })
    })
      .catch(e => console.error(e.message))
  }

  function removeLike (movie) {
    mainApi.removeMovie(movie).then(()=>{
      mainApi.getMovies()
        .then((userMovies)=>{
          setCurrentUser({...currentUser, userMovies: userMovies})
        })
    })
      .catch(e => console.error(e.message))
  }

  useEffect(() => {
    checkLogin();
  },[]);

  function handleLogin (email, password) {
    return auth.login(email, password)
      .then(()=>{
        setLoggedIn(true);
        setLoginIsCheck(true);
      })
  }

  function handleAddUser (email, password, name) {
    return auth.addUser(email, password, name)
      .then(()=>{
        setLoggedIn(true);
        setLoginIsCheck(true);
      })
  }

  function handleUpdateUser (email, name) {
    return auth.updateUser(email, name)
      .then(()=>{
        return checkLogin();
      });
  }

  function logOut () {
    return auth.logOut()
      .then(()=>{
        setLoggedIn(false);
      })
      .catch(e => console.error(e.message))
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="app">
      <div className="app__container">
        <Switch>
          <Route exact path='/'>
            <Header isMain={'true'} loggedIn={loggedIn} />
            <Main />
          </Route>
          <Route exact path={['/movies', '/saved-movies', '/profile']}>
            <Header loggedIn={loggedIn} />
            <Route exact path={['/movies', '/saved-movies', '/profile']}>
              {loggedIn || !loginIsCheck ?
              <Switch>
                <Route exact path='/movies' >
                  <Movies addLike={addLike} removeLike={removeLike} />
                </Route>
                <Route exact path='/saved-movies'>
                  <SavedMovies removeLike={removeLike} />
                </Route>
                <Route exact path='/profile'>
                  <Profile logOut={logOut} handleUpdateUser={handleUpdateUser} />
                </Route>
              </Switch>
                :
                <Redirect to={'/'} />
              }
            </Route>
          </Route>
          <Route exact path={['/signin', '/signup']}>
            {loggedIn && loginIsCheck ?
              <Redirect to={'movies'} />
              :
              <Switch>
                <Route exact path='/signin' >
                  <Login onLogin={handleLogin} />
                </Route>
                <Route exact path='/signup'>
                  <Register handleAddUser={handleAddUser} />
                </Route>
              </Switch>
            }
          </Route>
          <Route path='/' component={NotFound}/>
        </Switch>
        <Route exact path={['/movies', '/saved-movies', '/']} component={Footer} />
      </div>
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
