import styles from './CartBtn.module.css';

// import icon from './';

const CartBtn = ({ price = '520 $', itemsCount = 3 }) => {
  return (
    <button className={styles.btn}>
      <p className={styles.text}>{price}</p>
      <div className={styles.divider}></div>
      <img className={styles.icon} alt='Cart icon' width={18} height={18} />
      <p className={styles.text}>{itemsCount}</p>
    </button>
  );
};

export default CartBtn;
