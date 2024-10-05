import './MainButton.style.css';

// eslint-disable-next-line react/prop-types
export const MainButton = ({ content, isFilled=false }) => {
  return (
    <div className={`button ${isFilled ? 'filled' : ''}`}>
        <span>{content}</span>
    </div>
  )
}