import { SocialMediaItem } from './SocialMediaItem/SocialMediaItem';

import './SocialMedia.style.css';

export const SocialMedia = () => {
  return (
    <div className="social-media">
        <SocialMediaItem 
            source={'src/assets/Social-Media-Icons/vk.svg'}
            name={'vk'}
        />
        <SocialMediaItem 
            source={'src/assets/Social-Media-Icons/wa.svg'}
            name={'wa'}
        />
        <SocialMediaItem 
            source={'src/assets/Social-Media-Icons/tg.svg'}
            name={'tg'}
        />
    </div>
  )
}