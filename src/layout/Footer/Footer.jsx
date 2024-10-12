import { Logo } from '@components/Logo/Logo';
import { SocialMedia } from '@components/SocialMedia/SocialMedia';

import './Footer.style.css';

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer__main-content">
        <div className="footer__header">
          <Logo />
          <SocialMedia />
        </div>
        <menu className="footer__menu">
          <div className="footer__menu__items">
            <p className="footer__menu__item">Главная</p>
            <p className="footer__menu__item">Все ЖК Екатеринбурга</p>
            <p className="footer__menu__item">Карта новостроек</p>
            <p className="footer__menu__item">О компании</p>
          </div>
          <div className="footer__menu__items">
            <p className="footer__menu__item">Пункт меню</p>
            <p className="footer__menu__item">Пункт меню</p>
            <p className="footer__menu__item">Пункт меню</p>
            <p className="footer__menu__item">Пункт меню</p>
          </div>
          <div className="footer__menu__items">
            <p className="footer__menu__item">Пункт меню</p>
            <p className="footer__menu__item">Пункт меню</p>
            <p className="footer__menu__item">Пункт меню</p>
            <p className="footer__menu__item">Пункт меню</p>
          </div>
          <div className="footer__menu__items">
            <p className="footer__menu__item">Пункт меню</p>
            <p className="footer__menu__item">Пункт меню</p>
            <p className="footer__menu__item">Пункт меню</p>
            <p className="footer__menu__item">Пункт меню</p>
          </div>
        </menu>
        </div>
      <hr className='footer__line' />
      <div className="footer__license">
        <p className="footer__license__text">© 2016–2023, ООО «Домклик»Москва, 121170, Кутузовский проспект, д. 32, к. 1, ОГРН: 1157746652150 ИНН: 7736249247 <br /> Использование сайта означает согласие с <a className='footer__license__link' href="#">Пользовательским соглашением</a> и <a className='footer__license__link' href="#">Политикой обработки персональных данных</a></p>
      </div>
    </footer>
  )
}