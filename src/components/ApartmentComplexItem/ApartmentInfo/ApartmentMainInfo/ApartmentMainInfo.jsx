import './ApartmentMainInfo.style.css';

export const ApartmentMainInfo = () => {
  return (
    <div className='main__apartment-complex__item__main-block__apartment-info__main-info'>
        <div className="apartment-info__main-info__apart-name">
            <h1 className="apartment-info__main-info__header">ЖК Чаркова 72</h1>
            <span className="apartment-info__main-info__text dotted">100 квартир от застройщика «Астон»</span>
        </div>
        <div className="apartment-info__main-info__apart-price">
            <div className="price-info">
                <h1 className="apartment-info__main-info__header">от 4 377 600 р</h1>
                <span className="apartment-info__main-info__text dotted">В ипотеку от 13 760 р / мес</span>
            </div>
            <div className="mortgage">
                <p className='first-stroke'>3 квартал 2024 — </p>
                <p>3 квартал 2025</p>
            </div>
        </div>
    </div>
  )
}