import CartBtn from './CartBtn/CartBtn';
import styles from './Header.module.css';

import { Link } from 'react-router-dom';

import icon from './icon.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to='/'>
        <img
          className={styles.icon}
          src={icon}
          alt='Pizza icon'
          width={38}
          height={38}
        />
      </Link>
      <div className={styles.titleBlock}>
        <h1 className={styles.title}>react pizza</h1>
        <h2 className={styles.subtitle}>самая вкусная пицца во вселенной</h2>
      </div>
      <CartBtn />
    </header>
  );
};

export default Header;
