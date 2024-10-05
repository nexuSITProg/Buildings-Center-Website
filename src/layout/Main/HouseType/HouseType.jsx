import { SelectButton } from '../../../components/Buttons/SelectButton/SelectButton';
import './HouseType.style.css';

export const HouseType = () => {
  const arr = ['Жилая', 'Коммерческая', 'Паркинги', 'Кладовые'];
  
  return (
    <div className='main__house-type'>
        {arr.map((item, index) => (
            <SelectButton
                key={index}
                content={item}
            />
        ))}
    </div>
  )
}