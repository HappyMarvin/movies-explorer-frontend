import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about-project" id={`about-project`}>
      <h2 className="section-title">О проекте</h2>
      <ul className="about-project__list">
        <li className="about-project__item">
          <h3 className="about-project__item-title">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__item-subtitle">Составление плана, работу над бэкендом, вёрстку,
            добавление функциональности и финальные доработки.</p>
        </li>
        <li className="about-project__item">
          <h3 className="about-project__item-title">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__item-subtitle">У каждого этапа был мягкий и жёсткий дедлайн,
            которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>

      <div className="about__time">
        <div className="about__week">
          1 неделя
          <p className="about__week-sign">Back-end</p>
        </div>
        <div className="about__week">
          4 недели
          <p className="about__week-sign">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;