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
    </div>
  );
}


export default App;