import { MainIntroduce } from './MainIntroduce/MainIntroduce';

import './Main.style.css';

export const Main = () => {
  return (
    <main className='main'>
      <MainIntroduce 
        content={'Все новостройки Екатеринбурга'}
        buttonContent={'Записаться на экскурсию'}
      />
    </main>
  )
}