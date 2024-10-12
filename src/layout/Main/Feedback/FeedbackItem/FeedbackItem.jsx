import './FeedbackItem.style.css';
export const FeedbackItem = () => {
  return (
    <div className='feedback__item'>
        <div className="feedback__item__author">
            <img src="" alt="" className="feedback__item__author__img" />
            <h1 className="feedback__item__author__header">Максим Шадрин</h1>
        </div>
        <div className="feedback__item__content">
            <p className="feedback__item__content__text"> Я хотел бы поделиться своим положительным опытом сотрудничества с риелтором. Работа данного специалиста оказалась на самом высоком уровне, и я остался очень доволен результатом его работы. Риелтор проявил глубокие знания в области недвижимости</p>
        </div>
        <a href="#" className="feedback__item__read-all">Читать отзыв</a>
    </div>
  )
}