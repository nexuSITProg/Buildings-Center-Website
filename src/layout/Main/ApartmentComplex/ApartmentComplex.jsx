import { useMediaQuery } from 'react-responsive';
import { ApartmentComplexItem } from '@components/ApartmentComplexItem/ApartmentComplexItem';
import { ApartmentTouchSlider } from '@components/ApartmentTouchSlider/ApartmentTouchSlider';
import { MainButton } from '@components/Buttons/MainButton/MainButton';

import './ApartmentComplex.style.css';

export const ApartmentComplex = () => {
  const isMobile = useMediaQuery({query:'(max-width:950px)'});
  const arr = ['','','','','',''];

  return (
    <div className='main__apartment-complex'>
      {isMobile ? <ApartmentTouchSlider /> : 
        (arr.map((index) => (
          <ApartmentComplexItem key={index} />
        )))
      }
      <div className="main__apartment-complex__button">
        <MainButton 
          content={'Показать ещё'} 
          isFilled={true}
        />
      </div>
    </div>
  )
}