import { useState } from "react";

import './Accordeion.css'

const Accordion = ({title, text, children}) => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className="div3">
      <div className="div2">
        {<h3 className="title">{title}</h3>} <button className={`${!isOpen ? 'show-but' : 'show-but opened'}`} onClick={() => setIsOpen(!isOpen)}>+</button>
      </div>
      {isOpen === true &&
        <div>
          {children ?
          <div className="children">{children}<button className="mor-but">Еще</button></div>
          
          :
            <div className="div4">
              <p className="text">
                {text}
              </p>
              <button className="more-but">Подробнее</button>
            </div>}
        </div>
      }
    </div>
  );
};

export default Accordion;