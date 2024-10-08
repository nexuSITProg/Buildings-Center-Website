import { useEffect, useState, createContext } from 'react';
import { Arrows } from './Arrows/Arrows';
import { SlidesList } from './SlidesList/SlidesList';
import { Dots } from './Dots/Dots';

import './ApartmentSlider.style.css';

export const SliderContext = createContext();

export const ApartmentSlider = () => {
  const [items, setItems] = useState([]);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const loadData = async () => {
        const images = ['src/assets/ApartmentSliderImages/image1.png','src/assets/ApartmentSliderImages/image2.jpg','src/assets/ApartmentSliderImages/image3.png'];
        setItems(images);
    };
    loadData();
  }, []);

  const changeSlide = (direction = 1) => {
    let slideNumber = 0;

    if (slide + direction < 0) {
        slideNumber = items.length - 1;
    } else {
        slideNumber = (slide + direction) % items.length;
    }

    setSlide(slideNumber);
  }

  const goToSlide = (number) => {
    setSlide(number % items.length);
  }

  return (
    <div 
        className='main__apartment-complex__item__slider'
    >
        <SliderContext.Provider
            value={{
                goToSlide,
                changeSlide,
                slidesCount: items.length,
                slideNumber: slide,
                items,
            }}
        >
            <SlidesList />
            <Arrows />
            <Dots />
        </SliderContext.Provider>
    </div>
  )
}