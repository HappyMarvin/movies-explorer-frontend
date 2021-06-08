import './Register.css';
import SignInput from "../SignInput/SignInput";
import SignButton from "../SignButton/SignButton";
import SignLink from "../SignLink/SignLink";
import SignForm from "../SignForm/SignForm";
import {useState} from "react";
import { Route, Redirect } from 'react-router-dom';

function Register({ handleAddUser }) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');
  const [login, setLogin] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  function resetForm () {
    setPass('');
    setEmail('');
    setName('');
  }

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

  function handleChangeName (e) {
    setName(e.target.value);
    setIsValid(e.target.closest("form").checkValidity());
    setErrorMessage('');
  }

  function addUser (e) {
    e.preventDefault();
    handleAddUser(email, pass, name)
      .then(()=>{
        setLogin(true)
      })
      .catch(e => {
        console.error(e.message);
        resetForm();
        setErrorMessage(e.message)
      })
  }


  return (
    <Route >
      {login ?
        <Redirect to={'movies'} />
        :
        <SignForm title={`Добро пожаловать!`} handleSubmit={addUser} >
          <SignInput
            title={`Имя`}
            value={name}
            handleChange={handleChangeName}
            required={`required`}
            pattern="[a-zа-яёA-ZА-ЯЁ -]*"
          />
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
            errorMessage={errorMessage}
            required={`required`}
          />
          <SignButton text={`Зарегистрироваться`} isValid={isValid}/>
          <SignLink text={`Войти`} link={`/signin`} preText={`Уже зарегистрированы?`}/>
        </SignForm>
      }
    </Route>
  );
}

export default Register;
