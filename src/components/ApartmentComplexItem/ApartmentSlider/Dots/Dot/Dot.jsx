import { useContext } from 'react';
import { SliderContext } from '../../ApartmentSlider';

import './Dot.style.css';

// eslint-disable-next-line react/prop-types
export const Dot = ({ number }) => {
  const { goToSlide, slideNumber } = useContext(SliderContext);

  return (
    <div 
        className={`main__apartment-complex__item__slider__dot ${slideNumber === number ? 'selected' : ''}`}
        onClick={() => goToSlide(number)}
    />
  )
}