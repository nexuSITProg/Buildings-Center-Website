import { ApartmentSlider } from './ApartmentSlider/ApartmentSlider';
import { ApartmentInfo } from './ApartmentInfo/ApartmentInfo';
import { ApartmentNearBuildings } from './ApartmentNearBuildings/ApartmentNearBuildings';
import { ApartmentLocationInfo } from './ApartmentLocationInfo/ApartmentLocationInfo';

import './ApartmentComplexItem.style.css';

export const ApartmentComplexItem = () => {
  return (
    <div className='main__apartment-complex__item'>
        <div className="main__apartment-complex__item__main-block">
            <ApartmentSlider />
            <ApartmentInfo />
            <ApartmentNearBuildings />
            <ApartmentLocationInfo />
        </div>
    </div>
  )
}