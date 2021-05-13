import './Main.css';
import {Link} from "react-router-dom";
import webPlanet from "../../images/web-planet.png"

function Main() {
  return (
    <div className="main">
      <div className="main__text-wrapper">
        <h1 className="main__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <p className="main__subtitle">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <Link className="main__link" to={'#'}>Узнать больше</Link>
      </div>
      <div className="main__logo-wrapper">
        <img src={webPlanet} alt="Лого - веб-планета" className="main__logo" />
      </div>

    </div>
  );
}

export default Main;