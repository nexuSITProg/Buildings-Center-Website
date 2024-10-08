import { ApartmentsType } from './ApartmentsType/ApartmentsType';

import './ApartmentsPriceInfo.style.css';

export const ApartmentsPriceInfo = () => {
  return (
    <div className='main__apartment-complex__item__main-block__apartment-info__price-info'>
        <ApartmentsType 
            title={'Студии'}
            price={'от 4,4 млн р'}
        />
        <ApartmentsType 
            title={'1-комнатные'}
            price={'от 4,4 млн р'}
        />
        <ApartmentsType 
            title={'2-комнатные'}
            price={'от 4,4 млн р'}
        />
        <ApartmentsType 
            title={'3-комнатные'}
            price={'от 4,4 млн р'}
        />
        <ApartmentsType 
            title={'4-комнатные +'}
            price={'от 4,4 млн р'}
        />
    </div>
  )
}