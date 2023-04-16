import { useState } from 'react';
import styles from './PizzaItem.module.css';

const PizzaItemConfig = ({ sizes, types }) => {
  const [activeSize, setActiveSize] = useState(sizes[0]);
  const [activeType, setAcitveType] = useState(types[0]);

  return (
    <div className={styles.config}>
      <div className={styles.configBtnWrapper}>
        {types.map((type) => (
          <button
            key={type}
            onClick={() => setAcitveType(type)}
            className={`${styles.configBtn} ${
              activeType === type ? styles.configBtnActive : ''
            }`}
          >
            {type === 0 ? 'Традиционная' : 'Тонкая'}
          </button>
        ))}
      </div>
      <div className={styles.configBtnSizeWrapper}>
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => setActiveSize(size)}
            className={`${styles.configBtn} ${styles.configBtnSize} ${
              activeSize === size ? styles.configBtnActive : ''
            }`}
          >
            {size} см.
          </button>
        ))}
      </div>
    </div>
  );
};

export default PizzaItemConfig;
