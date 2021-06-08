import './AboutMe.css';
import meImage from '../../images/me.jpg'

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="section-title">Студент</h2>
      <div className="about-me__wrapper">
        <div className="about-me__content">
          <p className="about-me__name">Владимир</p>
          <p className="about-me__description">Фронтенд-разработчик</p>
          <p className="about-me__text">Хочу создавать новые интерфейсы и развиваться в области фронтенд-разработки.
            В данный момент работаю Junior Frontend-разработчиком в компании DocsVision.
            Моё хобби - это китайский чай и чайные церемонии, знаю чем отличается Те Гуань Инь от Да Хун Пао.</p>
          <ul className="about-me__list">
            <li className="about-me__item"><a href='#' className="about-me__link">Facebook</a></li>
            <li className="about-me__item"><a href='#' className="about-me__link">Github</a></li>
          </ul>
        </div>
        <img src={meImage} alt="фото автора" className="about-me__image"/>
      </div>
    </section>
  );
}

export default AboutMe;
