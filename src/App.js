import './App.css';

function App() {
  return (
    <div className='wrapper'>
      <header className='header'>
        <img className='header-img' src="../Logo.svg"></img>
        <nav className='nav'>
          <a className='nav-link' href=''>Главная</a>
          <a className='nav-link'  href=''>Сеансы</a>
          <a className='nav-link'  href=''>Отзывы</a>
          <a className='nav-link'  href=''>Контакты</a>
          <a className='nav-link'  href=''>Новости</a>
          <a className='nav-link'  href=''>Обо мне</a>
          <a className='nav-link'  href=''>Блог</a>
        </nav>
        <button className='header-button'>Записаться на сеанс</button>
      </header>
      <div className='content-wrapper'>
        <div className='title-container'>
          <img src='../left-icon.svg' className='left-icon'></img>
          <h3 className='content-wrapper-minititle'>Укрепление здоровья</h3>
          <img src='../right-icon.svg' className='rigth-icon'></img>
        </div>
        <h2 className='content-wrapper--title'>Акватерапия<br></br>RitmStyle</h2>
      </div>
    </div>
  );
}


export default App;