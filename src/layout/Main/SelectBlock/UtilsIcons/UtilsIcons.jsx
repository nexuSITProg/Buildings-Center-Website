import geolocSVG from '@assets/Select-Button/Utils-Icons/geolocation.svg';
import selectSVG from '@assets/Select-Button/Utils-Icons/select.svg';

import './UtilsIcons.style.css';

export const UtilsIcons = () => {
  return (
    <div className='main__select-block__utils-icons'>
      <img src={geolocSVG} alt="geo" className="main__select-block__utils-icons__img" />
      <img src={selectSVG} alt="select" className="main__select-block__utils-icons__img" />
    </div>
  )
}