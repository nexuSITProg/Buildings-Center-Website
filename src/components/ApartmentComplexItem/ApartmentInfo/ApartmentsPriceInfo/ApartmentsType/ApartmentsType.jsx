import './ApartmentsType.style.css';

// eslint-disable-next-line react/prop-types
export const ApartmentsType = ({ title, price }) => {
  return (
    <div className='main__apartment-complex__price-info'>
        <div className="main__apartment-complex__price-info__left">{title}</div>
        <div className="main__apartment-complex__price-info__right">{price}</div>
    </div>
  )
}