import { SelectButton } from '@components/Buttons/SelectButton/SelectButton';

import './HouseClass.style.css';

export const HouseClass = () => {
    const arr = ['Эконом', 'Комфорт', 'Бизнес', 'Элит'];

    return (
    <div className='main__house-class'>
        <h1 className="main__house-class__header">Класс</h1>
        <div className="main__house-class__items">
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
