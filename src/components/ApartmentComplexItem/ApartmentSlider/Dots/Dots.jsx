import { useContext } from 'react';
import { SliderContext } from '../ApartmentSlider';
import { Dot } from './Dot/Dot';

import './Dots.style.css';

export const Dots = () => {
  const { slidesCount } = useContext(SliderContext)
  
  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < slidesCount; i++) {
        dots.push(<Dot key={`dot-${i}`} number={i} />);
    }

    return dots;
  }

  return (
    <div className="main__apartment-complex__item__slider__dots">
        {renderDots()}
    </div>
  )
}