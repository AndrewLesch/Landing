import './App.css';
import Accordion from './components/Accordeion';
import Card from './components/Card';

const  App = () => {
  const accText = 'Какой то текст по конкретно этой профессии Какой то текст по конкретно этой профессии Какой то текст по конкретно этой профессии ';
  return (
    <div className='wrapper'>
      <header className='header'>
        <img src='../Logo.svg' alt='Logo' />
        <div className='header-links-container'>
          <a className='header-link'>Курсы</a>
          <a className='header-link'>Ближайшие старты</a>
          <a className='header-link'>Студентам</a>
          <a className='header-link'>Контакты</a>
        </div>
        <div className='header-contacts-container'>
          <button className='contact-button'>Записаться</button>
          <img src='../Phone.svg'></img>
          <h3 className='phone-number'>+375 29 143 45 67</h3>
        </div>
      </header>
      <div className='content-wrapper'>
        <div>
          <h1 className='content-title'>
            Nova Skills — ваша будущая работа в IT-сфере через самый эффективный метод case-study
          </h1>
          <ul className='list'>
            <li className='list-item'>Обучение через метод конкретных ситуаций </li>
            <li className='list-item'>Преподаватели-практики IT сферы </li>
            <li className='list-item'>Чат поддержки</li>
            <li className='list-item'>Проекты в портфолио </li>
            <li className='list-item'>Подготовка к трудоустройству</li>
          </ul>
          <div className='content-buttons-container'>
            <button className='content-button'>Все курсы 	&#160;	&#160; &#62;</button>
            <button className='content-button'>Ближайшие старты &#160;		&#160; &#62;</button>
          </div>
        </div>
        <img className='content-img' src='../Div content.svg'/>
      </div>
      <h2 className='app-title'>Какую профессию в IT выбрать? </h2>
      <hr className='hr1'></hr>
      <div className='acc-container'>
        <div className='acc-container1'>
          <hr className='hr2'></hr>
          <Accordion
            title={'Программирование (Java, Js, React, Python, BA, DevOps, QA, C#, Android)'}
            text={accText}>
              <hr className='hr3'></hr>
              <Accordion
                title={'Java '}
                text={accText}>
              </Accordion>
              <hr className='hr3'></hr>
              <Accordion
                title={'JS '}
                text={accText}>
              </Accordion>
              <hr className='hr3'></hr>
              <Accordion
                title={'React '}
                text={accText}>
              </Accordion>
              <hr className='hr3'></hr>
              <Accordion
                title={'Python '}
                text={accText}>
              </Accordion>
              <hr className='hr3'></hr>
          </Accordion>
          <hr className='hr2'></hr>
          <Accordion
            title={'Сопровождение IT (Recruitment/HR) '}
            text={accText}>
          </Accordion>
          <hr className='hr2'></hr>
          <Accordion
            title={'Разработка игр'}
            text={accText}>
          </Accordion>
          <hr className='hr2'></hr>
          <Accordion
            title={'Бизнес-анализ '}
            text={accText}>
          </Accordion>
          <hr className='hr2'></hr>
        </div>
        <div className='acc-container1'>
          <hr className='hr2'></hr>
          <Accordion
            title={'Аналитика данных (Data Science) '}
            text={accText}>
          </Accordion>
          <hr className='hr2'></hr>
          <Accordion
            title={'Тестирование ПО (Test Automation)'}
            text={accText}>
          </Accordion>
          <hr className='hr2'></hr>
          <Accordion
            title={'Веб-разработка и дизайн'}
            text={accText}>
          </Accordion>
          <hr className='hr2'></hr>
          <Accordion
            title={'Английский для IT'}
            text={accText}>
          </Accordion>
          <hr className='hr2'></hr>
          
        </div>
      </div>
      <h2 className='app-title'>Ближайшие старты курсов</h2>
      <hr className='hr1'></hr>
      <div className='cards-container'>
        <Card path={'../card-img1.svg'} title={'Графический дизайн'} text={'Знания помогут создавать любой визуальный контент: от печатной продукции до макета сайта.'}></Card>
        <Card path={'../card-img2.svg'} title={'Рекрутинг'} text={'Знания помогут создавать любой визуальный контент: от печатной продукции до макета сайта.'}></Card>
        <Card path={'../card-img3.svg'} title={'Разработчик игр на Unity. Начальный уровень '} text={'Основы проектирования игр для тех,кто хочет начать работать в игровой индустрии и сделать свою собственную успешную игру.'}></Card>
        <Card path={'../card-img4.svg'} title={'C# разработчик'} text={'Курс посвящен изучению особенностей языка C# и объектно-ориентированного подхода к программированию (ООП)'}></Card>
        <Card path={'../card-img5.svg'} title={'Java-разработчик. Базовый уровень'} text={'Разрабатывает архитектуру приложения, поддерживает, сопровождает проект и пишет техническую документацию.'}></Card>
        <Card path={'../card-img6.svg'} title={'Веб разработчик'} text={'Научитесь верстать и создавать сайты, зарабатывая на этом, работая на фрилансе, в веб-студии или в IT компаниях по всему миру. '}></Card>
      </div>
    </div>
  );
}


export default App;