import { Container, Fade } from '@mui/material';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

import styles from './CartEmpty.module.css';
import { Link } from 'react-router-dom';

const CartEmpty = () => {
  return (
    <Container maxWidth='md'>
      <Fade in={true}>
        <div class={styles.cart}>
          <h2 className={styles.title}>
            Корзина пустая <icon>😕</icon>
          </h2>
          <p className={styles.text}>
            Вероятней всего, вы не заказывали ещё пиццу.
            <br />
            Для того, чтобы заказать пиццу, перейди на главную страницу.
          </p>
          <RemoveShoppingCartIcon className={styles.img} fontSize='large' />
          <Link className={styles.link} to={'/'}>
            <p>Вернуться назад</p>
          </Link>
        </div>
      </Fade>
    </Container>
  );
};

export default CartEmpty;
