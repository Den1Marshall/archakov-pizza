import { useState } from 'react';
import styles from './PizzaItem.module.css';

const PizzaItemBottomBtn = () => {
  const [pizzaCount, setPizzaCount] = useState(0);

  return (
    <button
      className={styles.bottomBtn}
      onClick={() => setPizzaCount(pizzaCount + 1)}
    >
      <span className={styles.bottomBtnText}>Добавить</span>
      <span className={styles.bottomBtnCounter}>{pizzaCount}</span>
    </button>
  );
};

export default PizzaItemBottomBtn;
