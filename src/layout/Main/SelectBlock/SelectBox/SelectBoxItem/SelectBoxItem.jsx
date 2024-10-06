import { useState } from 'react';

import './SelectBoxItem.style.css';

// eslint-disable-next-line react/prop-types
export const SelectBoxItem = ({ content }) => {
  const [isSelected, setIsSelected] = useState(false);

  const changeIsSelected = () => {
    isSelected ? setIsSelected(false) : setIsSelected(true);
  }

  return (
    <div className={`main__select-block__select-box__item ${isSelected ? 'selected' : ''}`} onClick={changeIsSelected}>
        <span className='main__select-bock__select-box__item__text'>{content}</span>
    </div>
  )
}