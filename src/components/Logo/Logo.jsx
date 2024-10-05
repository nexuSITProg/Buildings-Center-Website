import './Logo.style.css';

export const Logo = () => {
  return (
    <div className="header__logo">
        <img src="../logo.svg" alt="logo" className="header__logo__img" />
        <p className="header__logo__text">
            Центр Новостроек Екатеринбурга
        </p>
    </div>
  )
}