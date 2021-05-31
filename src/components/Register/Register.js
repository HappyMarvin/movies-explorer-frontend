import './Register.css';
import SignInput from "../SignInput/SignInput";
import SignButton from "../SignButton/SignButton";
import SignLink from "../SignLink/SignLink";
import SignForm from "../SignForm/SignForm";
import {useState} from "react";

function Register() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');

  function handleChangeEmail (e) {
    setEmail(e.target.value);
  }

  function handleChangePass (e) {
    setPass(e.target.value);
  }

  function handleChangeName (e) {
    setName(e.target.value);
  }

  return (
    <SignForm title={`Добро пожаловать!`} >
      <SignInput
        title={`Имя`}
        value={name}
        handleChange={handleChangeName}
      />
      <SignInput
        type={`email`}
        title={`E-mail`}
        value={email}
        handleChange={handleChangeEmail}
      />
      <SignInput
        type={`password`}
        title={`Пароль`}
        value={pass}
        handleChange={handleChangePass}
        errorMessage={`Что-то пошло не так...`}
      />
      <SignButton text={`Зарегистрироваться`} />
      <SignLink text={`Войти`} link={`/signin`} preText={`Уже зарегистрированы?`} />
    </SignForm>
  );
}

export default Register;