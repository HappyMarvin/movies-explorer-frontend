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
          <p className="about-me__text">Я родился и живу в Саратове, закончил факультет экономики СГУ.
            У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
            С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке,
            начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
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