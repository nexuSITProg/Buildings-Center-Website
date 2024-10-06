import { SelectBoxItem } from './SelectBoxItem/SelectBoxItem';

import './SelectBox.style.css';

// eslint-disable-next-line react/prop-types
export const SelectBox = ({ header, content }) => {
  return (
    <div className='main__select-block__select-box'>
      <h1 className="main__select-block__select-box__header">{header}</h1>
      <div className="main__select-block__select-box__boxes">
        {/* eslint-disable-next-line react/prop-types */}
        {content.map((item, index) => (
          <SelectBoxItem
            key={index}
            content={item}
          />
        ))}
      </div>
    </div>
  )
}