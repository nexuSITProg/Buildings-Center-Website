import { SelectButton } from '@components/Buttons/SelectButton/SelectButton';

import './Districts.style.css';

export const Districts = () => {
  const arr = ['Академический', 'Верх-Исетский', 'Железнодорожный', 'Кировский', 'Ленинский', 'Октябрьский', 'Орджоникидзевский', 'Чкаловский'];

  return (
    <div className='main__districts'>
        <h1 className="main__districts__header">Районы</h1>
        <div className="main__districts__items">
            {arr.map((item, index) => (
                <SelectButton
                    key={index}
                    content={item}
                />
            ))}
        </div>
    </div>
  )
}
