import { useContext } from 'react';
import { SliderContext } from '../ApartmentSlider';
import { Slide } from './Slide/Slide';

import './SlidesList.style.css';

export const SlidesList = () => {
  const { slideNumber, items } = useContext(SliderContext);

  return (
    <div className="main__apartment-complex__item__slider__wrapper">
        <div 
        className='main__apartment-complex__item__slider__slides-list'
        style={{ transform: `translateX(-${slideNumber * 100}%)`}}
        >
            {items.map((slide, index) => (
                <Slide key={index} url={slide}/>
            ))}
        </div>
    </div>
  )
}