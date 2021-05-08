import './App.css';
import { Route, Switch } from 'react-router-dom';
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Header from "../Header/Header";
import NotFound from "../NotFound/NotFound";
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Header isMain={'true'} />
          <Main />
        </Route>
        <Route exact path={['/movies', '/saved-movies', '/profile']}>
          <Header />
          <Switch>
            <Route exact path='/movies' component={Movies} />
            <Route exact path='/saved-movies' component={SavedMovies}/>
            <Route exact path='/profile' component={Profile}/>
          </Switch>
        </Route>
        <Route exact path='/signin' component={Login}/>
        <Route exact path='/signup' component={Register}/>
        <Route path='/' component={NotFound}/>
      </Switch>
      <Route exact path={['/movies', '/saved-movies', '/']} component={Footer} />
    </div>
  );
}

export default App;
