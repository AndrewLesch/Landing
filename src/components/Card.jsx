

import './Card.css'

const Card = ({title, text, path}) => {
  
  return (
    <div className="card">
      <img style={{backgroundImage: `url(${path})`}} className="card-img" />
      <div className='card-content'>
        <button className='date'>8 ноября</button>
        <div className='card-text-cont'>
          <h3 className='card-title'>{title}</h3>
          <p className='card-text'>{text}</p>
        </div>
        <button className='card-butt'>4 месяца</button>
        <br />
        <button className='card-butt'>8 занятий в месяц</button>
        <p className='card-txt-bold'><b>390 BYN/ </b>месяц</p>  
        <button className='card-btn'>Подробнее</button>
      </div>
    </div>
  );
};

export default Card;