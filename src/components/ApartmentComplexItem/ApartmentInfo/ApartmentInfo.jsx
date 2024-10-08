import { ApartmentMainInfo } from './ApartmentMainInfo/ApartmentMainInfo';
import { ApartmentsPriceInfo } from './ApartmentsPriceInfo/ApartmentsPriceInfo';

import './ApartmentInfo.style.css';

export const ApartmentInfo = () => {
  return (
    <div className='main__apartment-complex__item__main-block__apartment-info'>
        <ApartmentMainInfo />
        <ApartmentsPriceInfo />
    </div>
  )
}