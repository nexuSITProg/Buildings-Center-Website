import './Slide.style.css';

// eslint-disable-next-line react/prop-types
export const Slide = ({ url }) => {
  return (
    <div className='main__apartment-complex__item__slider__slides-list__slide'>
        <img src={url} alt={'abc'} className='main__apartment-complex__item__slider__slides-list__slide__img'/>
    </div>
  )
}