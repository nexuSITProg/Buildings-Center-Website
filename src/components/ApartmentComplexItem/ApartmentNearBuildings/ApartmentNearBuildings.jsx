import { NearBuildingsItem } from './NearBuildingsItem/NearBuildingsItem';

import './ApartmentNearBuildings.style.css';

export const ApartmentNearBuildings = () => {
  const path = 'src/assets/NearBuildingsIcons/';
  const nearBuildings = [
    {
        name: 'Продукты',
        count: 6,
        icon: `${path}products.svg`,
    },
    {
        name: 'Образование',
        count: 6,
        icon: path + 'educations.svg',
    },
    {
        name: 'Медицина',
        count: 6,
        icon: path + 'medicine.svg',
    },
    {
        name: 'Спорт',
        count: 6,
        icon: path + 'sport.svg',
    },
    {
        name: 'Развлечения',
        count: 6,
        icon: path + 'fun.svg',
    },
    {
        name: 'Парки',
        count: 6,
        icon: path + 'parks.svg',
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