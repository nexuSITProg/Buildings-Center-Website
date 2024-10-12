import { useMediaQuery } from 'react-responsive';
import { MainIntroduce } from './MainIntroduce/MainIntroduce';
import { HouseType } from './HouseType/HouseType';
import { SelectBlock } from './SelectBlock/SelectBlock';
import { HouseClass } from './HouseClass/HouseClass';
import { Districts } from './Districts/Districts';
import { ApartmentComplex } from './ApartmentComplex/ApartmentComplex';
import { MortgagePrograms } from './MortgagePrograms/MortgagePrograms';
import { ComplexMap } from './ComplexMap/ComplexMap';
import { AnswerForm } from './AnswerForm/AnswerForm';

import './Main.style.css';
import { Feedback } from './Feedback/Feedback';

export const Main = () => {
  const isMobile = useMediaQuery({query: '(max-width:800px)'});

  return (
    <main className='main'>
      <MainIntroduce 
        content={'Все новостройки Екатеринбурга'}
        buttonContent={'Записаться на экскурсию'}
      />
      <HouseType />
      <SelectBlock />
      {isMobile ? '' : 
      <>
       <HouseClass />
       <Districts />
      </>}
      <ApartmentComplex />
      <ComplexMap />
      <MortgagePrograms />
      <AnswerForm />
      <Feedback />
    </main>
  )
}