import { useContext } from 'react';
import { SliderContext } from '../ApartmentSlider';

import './Arrows.style.css';

export const Arrows = () => {
  const { changeSlide } = useContext(SliderContext);

  return (
    <>
    <div onClick={() => changeSlide(1)} className="main__apartment-complex__item__slider__right-controller">
        <svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L6 6.73913L1 12" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </div>
    <div onClick={() => changeSlide(-1)} className="main__apartment-complex__item__slider__left-controller">
        <svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 12L1 6.26087L6 1" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </div>
    </>
  )
}