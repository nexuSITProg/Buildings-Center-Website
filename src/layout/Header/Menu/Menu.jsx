import './Menu.style.css';

export const Menu = () => {
  return (
    <ul className="header__menu">
        <li className="header__menu__item"><a href="#" className="header__menu__link">Главная</a></li>
        <li className="header__menu__item"><a href="#" className="header__menu__link">Все ЖК</a></li>
        <li className="header__menu__item"><a href="#" className="header__menu__link">Карта новостроек</a></li>
        <li className="header__menu__item"><a href="#" className="header__menu__link">О компании</a></li>
    </ul>
  )
}