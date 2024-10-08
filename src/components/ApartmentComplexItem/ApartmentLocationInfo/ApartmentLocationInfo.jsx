import { ApartmentLocationText } from './ApartmentLocationText/ApartmentLocationText'
import { MainButton } from '@components/Buttons/MainButton/MainButton';

import './ApartmentLocationInfo.style.css';

export const ApartmentLocationInfo = () => {
  return (
    <div className='apartment-location-info'>
        <ApartmentLocationText />
        <MainButton 
            content={'Подробнее'}
            isFilled={true}
        />
    </div>
  )
}