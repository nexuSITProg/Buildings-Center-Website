import { SocialMediaItem } from './SocialMediaItem/SocialMediaItem';

import vkIcon from '@assets/Social-Media-Icons/vk.svg';
import waIcon from '@assets/Social-Media-Icons/wa.svg';
import tgIcon from '@assets/Social-Media-Icons/tg.svg';

import './SocialMedia.style.css';

export const SocialMedia = () => {
  return (
    <div className="social-media">
        <SocialMediaItem 
            source={vkIcon}
            name={'vk'}
        />
        <SocialMediaItem 
            source={waIcon}
            name={'wa'}
        />
        <SocialMediaItem 
            source={tgIcon}
            name={'tg'}
        />
    </div>
  )
}