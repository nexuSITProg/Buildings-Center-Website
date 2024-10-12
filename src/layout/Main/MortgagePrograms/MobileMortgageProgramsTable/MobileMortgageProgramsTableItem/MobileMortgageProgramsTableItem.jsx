/* eslint-disable react/prop-types */
import { MainButton } from '@components/Buttons/MainButton/MainButton';

import './MobileMortgageProgramsTableItem.style.css';

export const MobileMortgageProgramsTableItem = ({ mortgage }) => {
  return (
    <div className='mobile-mortgage-programs-table__item'>
        <div className="mobile-mortgage-programs-table__item__header">
            <img src={mortgage.bankImg} alt={mortgage.bankName} className="mobile-mortgage-programs-table__item__header__img" />
            <p className="mobile-mortgage-programs-table__header__item__text">{mortgage.bankName}</p>
        </div>
        <div className="mobile-mortgage-programs-table__item__main-info">
            <div className="mobile-mortgage-programs-table__item__info">
                <h1 className="mobile-mortgage-programs-table__item__info__header">Программа</h1>
                <p className="mobile-mortgage-programs-table__item__info__text">{mortgage.program}</p>
            </div>
            <div className="mobile-mortgage-programs-table__item__info">
                <h1 className="mobile-mortgage-programs-table__item__info__header">Ставка</h1>
                <p className="mobile-mortgage-programs-table__item__info__text">{mortgage.rate}</p>
            </div>
            <div className="mobile-mortgage-programs-table__item__info">
                <h1 className="mobile-mortgage-programs-table__item__info__header">Первый взнос</h1>
                <p className="mobile-mortgage-programs-table__item__info__text">{mortgage.firstPayment}</p>
            </div>
            <div className="mobile-mortgage-programs-table__item__info">
                <h1 className="mobile-mortgage-programs-table__item__info__header">Срок, лет</h1>
                <p className="mobile-mortgage-programs-table__item__info__text">{mortgage.period}</p>
            </div>
            <div className="mobile-mortgage-programs-table__item__info">
                <h1 className="mobile-mortgage-programs-table__item__info__header">Платёж руб./мес.</h1>
                <p className="mobile-mortgage-programs-table__item__info__text">{mortgage.monthPayment}</p>
            </div>
        </div>
        <MainButton 
            content={'Подробнее'}
        />
    </div>
  )
}