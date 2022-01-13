import React from 'react';
import './header.scss';
import logo from './img/logo.svg';
import Btn from '../../components/btn/btn';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.key = this.props.keyID;
    this.menuItems = this.props.data.items || false;
    this.authorization = this.props.data.authorization || false;
    this.userName = this.props.data.name || 'Имя';
    this.btnLogin = {
      height: 'narrow',
      text: 'Войти',
      border: true,
    };
    this.btnRegistr = {
      height: 'narrow',
      text: 'Зарегистрироваться',
    };
  }
  printMenu(items) {
    return items.map((item) => (
      <li
        className={
          'header__menu-li ' +
          (item.state === 'active' ? 'header__menu-li_active' : '') +
          (item.type === 'expand' ? 'header__menu-li_expand js-header__menu-li_expand' : '')
        }
      >
        <a className="header__menu-a" href={item.link}>
          {item.menuItem}
        </a>
        {item.submenu && <ul className="header__submenu">{this.submenu(item.submenu)}</ul>}
      </li>
    ));
  }
  submenu(sbm) {
    return sbm.map((sbmItem) => (
      <li className="header__submenu-li">
        <a className="header__submenu-a" href={sbmItem.sbmLink}>
          {sbmItem.menuItem}
        </a>
      </li>
    ));
  }
  render() {
    let { key, menuItems, authorization, userName, btnLogin, btnRegistr } = this;

    return (
      <header className="header" key={key}>
        <div className="header__content-container">
          <a className="header__logo-link" href="./landing-page.html">
            <img className="header__logo" src={logo} alt="logo" />
          </a>
          <div className="header__menu-mobile js-header__menu-mobile"></div>
          <div className="header__links header__links_hidden">
            {menuItems && (
              <nav className="header__block-menu">
                <ul className="header__menu">{this.printMenu(menuItems)}</ul>
              </nav>
            )}
            {authorization ? (
              <div className="header__block-login">
                <div className="header__login-vertical-line"></div>
                <p>{userName}</p>
              </div>
            ) : (
              <div className="header__block-login">
                <div className="header__btn header__btn_border">
                  <Btn data={btnLogin} />
                </div>
                <div className="header__btn header__btn_gradient">
                  <Btn data={btnRegistr} />
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
