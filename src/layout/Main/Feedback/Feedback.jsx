import { FeedbackItem } from './FeedbackItem/FeedbackItem';

import './Feedback.style.css';
import { useMediaQuery } from 'react-responsive';

export const Feedback = () => {
  const isMobile = useMediaQuery({query: '(max-width:800px)'});

  return (
    <div className='feedback'>
      <h1 className="feedback__header">Отзывы</h1>
      <div className="feedback__items">
        {isMobile ? <FeedbackItem /> 
        :
        <>
          <FeedbackItem />
          <FeedbackItem />
          <FeedbackItem />
        </>}
      </div>
      <div className="feedback__slider-buttons">
        <div className="feedback__slider-button-left">
          <svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L6 6.73913L1 12" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="feedback__slider-button-right">
          <svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L6 6.73913L1 12" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  )
}