import './NearBuildingsItem.style.css';

{/* eslint-disable-next-line react/prop-types */}
export const NearBuildingsItem = ({ data }) => {
  return (
    <div className='near-buildings-item'>
        {/* eslint-disable-next-line react/prop-types */}
        <img className='near-buildings-item__img' src={data.icon} alt={data.name} />
        {/* eslint-disable-next-line react/prop-types */}
        <span className='near-buildings-item__text'>{data.name} {data.count}</span>
    </div>
  )
}
