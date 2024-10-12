import { MortgageProgramsTable } from './MortgageProgramsTable/MortgageProgramsTable';
import { MobileMortgageProgramsTable } from './MobileMortgageProgramsTable/MobileMortgageProgramsTable';
import { MainButton } from '@components/Buttons/MainButton/MainButton';
import { useMediaQuery } from 'react-responsive';

import './MortgagePrograms.style.css';

export const MortgagePrograms = () => {
  const isMobile = useMediaQuery({query: '(max-width: 1200px)'});
  const mortgages = [
    {
      bankImg: 'src/assets/bank-img.png',
      bankName: 'Абсолют Банк',
      program: 'Строящееся жильё',
      rate: 'от 5.69%',
      firstPayment: 'от 20.1%',
      period: 'до 30',
      monthPayment: 'от 16 251', 
    },
    {
      bankImg: 'src/assets/bank-img.png',
      bankName: 'Абсолют Банк',
      program: 'Строящееся жильё',
      rate: 'от 5.69%',
      firstPayment: 'от 20.1%',
      period: 'до 30',
      monthPayment: 'от 16 251', 
    },
    {
      bankImg: 'src/assets/bank-img.png',
      bankName: 'Абсолют Банк',
      program: 'Строящееся жильё',
      rate: 'от 5.69%',
      firstPayment: 'от 20.1%',
      period: 'до 30',
      monthPayment: 'от 16 251', 
    },
    {
      bankImg: 'src/assets/bank-img.png',
      bankName: 'Абсолют Банк',
      program: 'Строящееся жильё',
      rate: 'от 5.69%',
      firstPayment: 'от 20.1%',
      period: 'до 30',
      monthPayment: 'от 16 251', 
    },
    {
      bankImg: 'src/assets/bank-img.png',
      bankName: 'Абсолют Банк',
      program: 'Строящееся жильё',
      rate: 'от 5.69%',
      firstPayment: 'от 20.1%',
      period: 'до 30',
      monthPayment: 'от 16 251', 
    },
    {
      bankImg: 'src/assets/bank-img.png',
      bankName: 'Абсолют Банк',
      program: 'Строящееся жильё',
      rate: 'от 5.69%',
      firstPayment: 'от 20.1%',
      period: 'до 30',
      monthPayment: 'от 16 251', 
    }
  ];

  return (
    <div className='main__mortgage-programs'>
        <div className="main__mortgage-programs__header-info">
            <h1 className="main__mortgage-programs__header-info__header">Ипотечные программы</h1>
            <p className="main__mortgage-programs__header-info__text">Расчёты являются приблизительными.
            За точной информацией обращайтесь в офис продаж по тел. +7 812 604-25-68</p>
        </div>
        {isMobile 
        ? 
        <MobileMortgageProgramsTable 
          mortgages={mortgages}
        /> 
        : 
        <MortgageProgramsTable 
          mortgages={mortgages}
        />}
        <MainButton 
            content={'Показать ещё'}
            isFilled={true}
        />
    </div>
  )
}