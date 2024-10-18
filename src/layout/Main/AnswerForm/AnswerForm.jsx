import { MainButton } from '@components/Buttons/MainButton/MainButton';

import questionSVG from '@assets/question-icon.svg'

import './AnswerForm.style.css';

export const AnswerForm = () => {
  return (
    <form className='main__answer-form'>
        <h1 className="main__answer-form__header">Мы готовы ответить на все Ваши вопросы</h1>
        <div className="main__answer-form__inputs">
            <input className='main__answer-form__input' type='text' name="" id="" placeholder='Имя'/>
            <input className='main__answer-form__input' type="phone" name="" id="" placeholder='+7 (***) ***-**-**'/>
            <MainButton 
                content={'Отправить'}
            />
            <p className='main__answer-form__text'>Нажимая кнопку «Отправить», вы подтверждаете, что согласны на обработку персональных данных.</p>
        </div>
        <img className='main__answer-form__img' src={questionSVG} alt="question" />
    </form>
  )
}