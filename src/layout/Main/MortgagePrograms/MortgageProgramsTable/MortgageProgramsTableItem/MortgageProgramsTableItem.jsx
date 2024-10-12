/* eslint-disable react/prop-types */
import { MainButton } from '@components/Buttons/MainButton/MainButton';

import './MortgageProgramsTableItem.style.css';

export const MortgageProgramsTableItem = ({ mortgage }) => {
  return (
    <tr className='main__mortgage-programs__table__item'>
        <td className='main__mortgage-programs__table__item__bank'>
            <img className='main__mortgage-programs__table__item__bank__img' src={mortgage.bankImg} alt={mortgage.bankName} />
            <span className='main__mortgage-programs__table__item__cell__text'>{mortgage.bankName}</span>
        </td>
        <td className='main__mortgage-programs__table__item__cell'>
            <span className='main__mortgage-programs__table__item__cell__text'>{mortgage.program}</span>
        </td>
        <td className='main__mortgage-programs__table__item__cell'>
            <span className='main__mortgage-programs__table__item__cell__text'>{mortgage.rate}</span>
        </td>
        <td className='main__mortgage-programs__table__item__cell'>
            <span className='main__mortgage-programs__table__item__cell__text'>{mortgage.firstPayment}</span>
        </td>
        <td className='main__mortgage-programs__table__item__cell'>
            <span className='main__mortgage-programs__table__item__cell__text'>{mortgage.period}</span>
        </td>
        <td className='main__mortgage-programs__table__item__cell'>
            <span className='main__mortgage-programs__table__item__cell__text'>{mortgage.monthPayment}</span>
        </td>
        <td className='main__mortgage-programs__table__item__cell'>
            <MainButton
                content={'Подробнее'}
            />
        </td>
    </tr>
  )
}