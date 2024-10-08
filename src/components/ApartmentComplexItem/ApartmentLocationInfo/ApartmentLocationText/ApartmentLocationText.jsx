import './ApartmentLocationText.style.css';

export const ApartmentLocationText = () => {
  return (
    <div className='apartment-location-text-block'>
        <img className='apartment-location-text-block__geo-icon' src="src/assets/geolocation.svg" alt="geo" />
        <span className='apartment-location-text-block__text dotted'>Екатеринбург, Ярославская 33</span>
    </div>
  )
}