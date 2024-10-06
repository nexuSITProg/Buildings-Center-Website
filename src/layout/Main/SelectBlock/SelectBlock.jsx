import { SelectBox } from './SelectBox/SelectBox';
import { SelectSlider } from './SelectSlider/SelectSlider';
import { UtilsIcons } from './UtilsIcons/UtilsIcons';
import { useMediaQuery } from 'react-responsive';

import './SelectBlock.style.css';

export const SelectBlock = () => {
  const rooms = ['С', '1', '2', '3', '4+'];
  const deadlines = ['Сдан', '2024', '2025', '2026+'];
  const apartments = ['Без отделки', 'С отделкой', 'White box'];
  const furniture = ['С кухней'];

  const isTablet = useMediaQuery({query:'(max-width:1440px)'});
  const isBigPhone = useMediaQuery({query:'(max-width:800px)'});
  const isPhone = useMediaQuery({query:'(max-width:500px)'});

  return (
    <div className='main__select-block'>
        <SelectBox
          header={'Комнатность'}
          content={rooms}
        />
        {isPhone ? null : 
        <>
          <SelectSlider/>
          {isBigPhone ? null : 
          <>
            <SelectBox
              header={'Срок сдачи'}
              content={deadlines}
            />
          </>}
        </>
        }        
        {isTablet ? null :
        <>
          <SelectBox
          header={'Отделка'}
          content={apartments}
          />
          <SelectBox
            header={'Мебилировка'}
            content={furniture}
          />
        </>
        }
        <UtilsIcons />
    </div>
  )
}