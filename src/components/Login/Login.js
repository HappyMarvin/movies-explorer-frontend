import './Login.css';
import SignForm from "../SignForm/SignForm";
import SignInput from "../SignInput/SignInput";
import {useState} from "react";
import SignButton from "../SignButton/SignButton";
import SignLink from "../SignLink/SignLink";

function Login() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  function handleChangeEmail (e) {
    setEmail(e.target.value);
  }

  function handleChangePass (e) {
    setPass(e.target.value);
  }

  return (
      <SignForm title={`Рады видеть!`} >
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
        />
        <SignButton text={`Войти`} />
        <SignLink text={`Регистрация`} link={`/signup`} preText={`Ещё не зарегистрированы?`} />
      </SignForm>
  );
};

export default Login;