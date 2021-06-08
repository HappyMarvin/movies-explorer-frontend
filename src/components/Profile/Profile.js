import './Profile.css';
import GreetingTitle from "../GreetingTitle/GreetingTitle";
import {useState, useContext, useEffect} from "react";
import { Route, Redirect } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile({ logOut, handleUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [login, setLogin] = useState(true);
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  useEffect(()=> {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser])


  function resetForm () {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }

  function handleChangeName (e) {
    setName(e.target.value);
    setIsValid(e.target.closest("form").checkValidity());
    setErrorMessage('');
  }
  function handleChangeEmail (e) {
    setEmail(e.target.value);
    setIsValid(e.target.closest("form").checkValidity());
    setErrorMessage('');
  }

  function handleLogOut (e) {
    logOut(e);
    setLogin(false);
  }

  function onUpdateUser (e) {
    e.preventDefault();
    handleUpdateUser(email, name)
      .then(()=>{
        setErrorMessage('Данные отредактированы!');
      })
      .catch(e => {
        console.error(e.message);
        resetForm();
        setErrorMessage(e.message)
      });
  }

  return (
    <Route >
      {login ?
          <div className="profile">
            <GreetingTitle mix={`greeting-title__profile`} text={`Привет, ${currentUser.name}!`}/>
            <form action="#" className="profile__form" onSubmit={onUpdateUser}>
              <p className="profile__input-wrapper profile__input-wrapper_name">
                Имя
                <input
                  type="text"
                  className="profile__input"
                  value={name}
                  onChange={handleChangeName}
                  required={`required`}
                  pattern="[a-zа-яёA-ZА-ЯЁ -]*"
                />
              </p>
              <p className="profile__input-wrapper profile__input-wrapper_email">
                E-mail
                <input
                  type="email"
                  className="profile__input"
                  value={email}
                  onChange={handleChangeEmail}
                  required={`required`}
                />
                <span className="profile__error">{errorMessage}</span>
              </p>
              <button
                type="submit"
                className={`profile__form-submit ${isValid ? '' : 'profile__form-submit_disabled'}`}
                disabled={!isValid}
              >
                Редактировать
              </button>
              <button type="button" className="profile__exit" onClick={handleLogOut}>Выйти из аккаунта</button>
            </form>
          </div>
          :
          <Redirect to={'/'}/>
      }
    </Route>
  );
}

export default Profile;
