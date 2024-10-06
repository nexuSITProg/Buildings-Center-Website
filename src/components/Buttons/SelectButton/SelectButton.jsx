import { useState } from 'react';

import crossSVG from '@assets/Select-Button/cross.svg';

import './SelectButton.style.css';

// eslint-disable-next-line react/prop-types
export const SelectButton = ({ content }) => {
  const [isSelected, setIsSelected] = useState(false);

  const changeIsSelected = () => {
    isSelected ? setIsSelected(false) : setIsSelected(true);
  }

  return (
    <div className={`select-button ${isSelected ? 'selected' : ''}`} onClick={changeIsSelected}>
      <span className={`select-button__text ${isSelected ? 'selected-text' : ''}`}>{content}</span>
      {isSelected ? <img src={crossSVG} alt="cross" className="select-button__img" /> : ''}
    </div>
  )
}