import { SocialMediaItem } from './SocialMediaItem/SocialMediaItem';

import vkSVG from '@assets/Social-Media-Icons/vk.svg';
import waSVG from '@assets/Social-Media-Icons/wa.svg';
import tgSVG from '@assets/Social-Media-Icons/tg.svg';

import './SocialMedia.style.css';

export const SocialMedia = () => {
  return (
    <div className="social-media">
        <SocialMediaItem 
            source={vkSVG}
            name={'vk'}
        />
        <SocialMediaItem 
            source={waSVG}
            name={'wa'}
        />
        <SocialMediaItem 
            source={tgSVG}
            name={'tg'}
        />
    </div>
  )
}