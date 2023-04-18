import { useState } from 'react';
import styles from './CartItem.module.css';

import CloseIcon from '@mui/icons-material/Close';

const CartItem = () => {
  const [amount, setAmount] = useState(0);

  const increaseAmount = () => setAmount(amount + 1);
  const decreaseAmount = () => (amount > 0 ? setAmount(amount - 1) : 0);

  return (
    <li className={styles.item}>
      <img className={styles.img} src='' alt='Pizza' width={80} height={80} />
      <h3 className={styles.title}>
        Сырный цыпленок
        <h4 className={styles.subtitle}>тонкое тесто, 26 см.</h4>
      </h3>
      <div className={styles.wrapper}>
        <button className={styles.btn} onClick={decreaseAmount}>
          -
        </button>
        <p className={styles.amount}>{amount}</p>
        <button className={styles.btn} onClick={increaseAmount}>
          +
        </button>
      </div>
      <p className={styles.price}>770 ₴</p>
      <button className={styles.deleteBtn}>
        <CloseIcon />
      </button>
    </li>
  );
};

export default CartItem;
