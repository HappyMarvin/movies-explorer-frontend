import './Profile.css';
import GreetingTitle from "../GreetingTitle/GreetingTitle";
import {useState} from "react";

function Profile() {
  const [name, setName] = useState('Владимир');
  const [email, setEmail] = useState('happymarvin@yandex.ru');

  function handleChangeName (e) {
    setName(e.target.value);
  }
  function handleChangeEmail (e) {
    setEmail(e.target.value);
  }

  return (
    <div className="profile">
      <GreetingTitle mix={`greeting-title__profile`} text={`Привет, Владимир!`} />
      <form action="#" className="profile__form">
        <p className="profile__input-wrapper profile__input-wrapper_name">
          Имя
          <input type="text" className="profile__input" value={name} onChange={handleChangeName}/>
        </p>
        <p className="profile__input-wrapper profile__input-wrapper_email">
          E-mail
          <input type="email" className="profile__input" value={email} onChange={handleChangeEmail}/>
        </p>
        <button type="submit" className="profile__form-submit">Редактировать</button>
        <button type="button" className="profile__exit">Выйти из аккаунта</button>
      </form>
    </div>
  );
}

export default Profile;