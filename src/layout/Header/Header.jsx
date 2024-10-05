import { useMediaQuery } from 'react-responsive';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';
import { Logo } from '@components/Logo/Logo';
import { Menu } from '@layout/Header/Menu/Menu';
import { Contacts } from '@layout/Header/Contacts/Contacts';
import { SocialMedia } from '@components/SocialMedia/SocialMedia';
import { MainButton } from '@components/Buttons/MainButton/MainButton';

import './Header.style.css';

export const Header = () => {
  const isTablet = useMediaQuery({query: '(max-width:1440px)'});

  return (
    <header className="header">
      <Logo />
      {isTablet ? 
      <BurgerMenu />
      : 
      <>
      <Menu />
      <Contacts 
        phone={'8 800 000 00 00'}
      />
      <SocialMedia />
      <MainButton 
        content={'Перезвони мне'}
      />
      </>}
    </header>
  )
}