import { useDispatch } from 'react-redux';
import styles from './CartItem.module.css';

import CloseIcon from '@mui/icons-material/Close';

import {
  decreaseAmount,
  increaseAmount,
  deleteItem,
} from '../../redux/slices/cartSlice';
import { FC } from 'react';

interface CartItemProps {
  name: string;
  img: string;
  activeType: string;
  activeSize: number;
  price: number;
  pizzaCount: number;
}

const CartItem: FC<CartItemProps> = ({
  name,
  img,
  activeType,
  activeSize,
  price,
  pizzaCount,
}) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.item}>
      <img
        className={styles.img}
        src={img}
        alt='Pizza'
        width={80}
        height={80}
      />
      <h3 className={styles.title}>
        {name}
        <p className={styles.subtitle}>
          {activeType}, {activeSize} см.
        </p>
      </h3>
      <div className={styles.wrapper}>
        <button
          className={`${pizzaCount > 1 ? styles.btn : styles.btnDisabled}`}
          onClick={() =>
            dispatch(decreaseAmount({ name, activeSize, activeType, price }))
          }
        >
          -
        </button>
        <p className={styles.amount}>{pizzaCount}</p>
        <button
          className={styles.btn}
          onClick={() =>
            dispatch(increaseAmount({ name, activeSize, activeType, price }))
          }
        >
          +
        </button>
      </div>
      <p className={styles.price}>{price} ₴</p>
      <button
        className={styles.deleteBtn}
        onClick={() => dispatch(deleteItem({ name, activeSize, activeType }))}
      >
        <CloseIcon />
      </button>
    </li>
  );
};

export default CartItem;
