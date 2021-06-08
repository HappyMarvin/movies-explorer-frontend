import './Login.css';
import SignForm from "../SignForm/SignForm";
import SignInput from "../SignInput/SignInput";
import {useState} from "react";
import SignButton from "../SignButton/SignButton";
import SignLink from "../SignLink/SignLink";
import { Route, Redirect } from 'react-router-dom';


function Login({ onLogin, history }) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [login, setLogin] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  function handleChangeEmail (e) {
    setEmail(e.target.value);
    setIsValid(e.target.closest("form").checkValidity());
    setErrorMessage('');
  }

  function handleChangePass (e) {
    setPass(e.target.value);
    setIsValid(e.target.closest("form").checkValidity());
    setErrorMessage('');
  }

  function resetForm () {
    setPass('');
    setEmail('');
  }

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(email, pass)
      .then(()=>{
       setLogin(true);
      })
      .catch(e => {
      console.error(e.message);
      setErrorMessage(e.message);
      resetForm();
    })
  }

  return (
    <Route>
      {!login ?
        <SignForm title={`Рады видеть!`} handleSubmit={handleSubmit}>
          <SignInput
            type={`email`}
            title={`E-mail`}
            value={email}
            handleChange={handleChangeEmail}
            required={`required`}
          />
          <SignInput
            type={`password`}
            title={`Пароль`}
            value={pass}
            handleChange={handleChangePass}
            required={`required`}
            errorMessage={errorMessage}
          />
          <SignButton text={`Войти`} isValid={isValid}/>
          <SignLink text={`Регистрация`} link={`/signup`} preText={`Ещё не зарегистрированы?`}/>
        </SignForm>
        :
        <Redirect to={'/movies'}/>
      }
    </Route>
  );
};

export default Login;
