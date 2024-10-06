import './ApartmentComplexItem.style.css';
import { ApartmentSlider } from './ApartmentSlider/ApartmentSlider';

export const ApartmentComplexItem = () => {
  return (
    <div className='main__apartment-complex__item'>
        <div className="main__apartment-complex__item__main-block">
            <ApartmentSlider />
        </div>
    </div>
  )
}