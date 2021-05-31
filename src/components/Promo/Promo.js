import './Promo.css';
import { Link } from "react-router-dom";
import webPlanet from "../../images/web-planet.png";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__text-wrapper">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <p className="promo__subtitle">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <a className="promo__link" href={'#about-project'}>Узнать больше</a>
      </div>
      <div className="promo__logo-wrapper">
        <img src={webPlanet} alt="Лого - веб-планета" className="promo__logo" />
      </div>
    </section>
  );
}

export default Promo;