import { SelectBox } from './SelectBox/SelectBox';
import './SelectBlock.style.css';
import { SelectSlider } from './SelectSlider/SelectSlider';

export const SelectBlock = () => {
  const rooms = ['С', '1', '2', '3', '4+'];
  const deadlines = ['Сдан', '2024', '2025', '2026+'];
  const appartaments = ['Без отделки', 'С отделкой', 'White box'];
  const furniture = ['С кухней'];

  return (
    <div className='main__select-block'>
        <SelectBox
          header={'Комнатность'}
          content={rooms}
        />
        <SelectSlider/>
        <SelectBox
          header={'Срок сдачи'}
          content={deadlines}
        />
        <SelectBox
          header={'Отделка'}
          content={appartaments}
        />
        <SelectBox
          header={'Мебилировка'}
          content={furniture}
        />
    </div>
  )
}