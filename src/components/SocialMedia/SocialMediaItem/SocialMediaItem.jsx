import './SocialMediaItem.style.css';

// eslint-disable-next-line react/prop-types
export const SocialMediaItem = ({ source, name }) => {
  return (
    <div className="social-media__item">
        <img src={source} alt={name} className="social-media__item__img" />
    </div>
  )
}