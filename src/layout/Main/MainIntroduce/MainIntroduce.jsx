import { MainButton } from '@components/Buttons/MainButton/MainButton';
import './MainIntroduce.style.css';

// eslint-disable-next-line react/prop-types
export const MainIntroduce = ({ content, buttonContent }) => {
  return (
    <div className='main__main-introduce'>
        <div className="main__main-introduce__blur-block">
            <span className='main__main-introduce__blur-block__text'>{content}</span>
            <MainButton 
                content={buttonContent}
                isFilled={true}
            />
        </div>
    </div>
  )
}