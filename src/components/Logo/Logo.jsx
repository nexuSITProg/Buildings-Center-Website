import './Logo.style.css';

export const Logo = () => {
  return (
    <div className="header__logo">
        <img src="../logo.svg" alt="logo" className="header__logo__img" />
        <p className="header__logo__text fc-red fw-900 fs-14">
            Центр Новостроек Екатеринбурга
        </p>
    </div>
  )
}