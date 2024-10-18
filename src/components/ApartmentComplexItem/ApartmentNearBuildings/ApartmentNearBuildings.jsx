import { NearBuildingsItem } from './NearBuildingsItem/NearBuildingsItem';

import educationSVG from '@assets/NearBuildingsIcons/educations.svg'
import medicineSVG from '@assets/NearBuildingsIcons/medicine.svg'
import productsSVG from '@assets/NearBuildingsIcons/products.svg'
import sportSVG from '@assets/NearBuildingsIcons/sport.svg'
import funSVG from '@assets/NearBuildingsIcons/fun.svg'
import parksSVG from '@assets/NearBuildingsIcons/parks.svg'

import './ApartmentNearBuildings.style.css';

export const ApartmentNearBuildings = () => {
  const nearBuildings = [
    {
        name: 'Продукты',
        count: 6,
        icon: productsSVG,
    },
    {
        name: 'Образование',
        count: 6,
        icon: educationSVG,
    },
    {
        name: 'Медицина',
        count: 6,
        icon: medicineSVG,
    },
    {
        name: 'Спорт',
        count: 6,
        icon: sportSVG,
    },
    {
        name: 'Развлечения',
        count: 6,
        icon: funSVG,
    },
    {
        name: 'Парки',
        count: 6,
        icon: parksSVG,
    },
  ];

  return (
    <div className='apartment-near-buildings'>
        {nearBuildings.map((data, index) => (
            <NearBuildingsItem key={index} data={data}/>
        ))}
    </div>
  )
}