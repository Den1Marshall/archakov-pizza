import { useDispatch, useSelector } from 'react-redux';
import styles from './PizzaItem.module.css';
import { addCartItem } from '../../redux/slices/cartSlice';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { RootState } from '../../redux/store';

interface PizzaItemProps {
  name: string;
  img: string;
  types: number[];
  sizes: number[];
  price: number;
  id: number;
}

const PizzaItem: FC<PizzaItemProps> = ({
  name,
  img,
  types,
  sizes,
  price,
  id,
}) => {
  const [pizzaCount, setPizzaCount] = useState(1);
  const [activeSize, setActiveSize] = useState(sizes[0]);
  const [activeType, setActiveType] = useState(types[0]);

  const { items } = useSelector((state: RootState) => state.cartSlice);

  const dispatch = useDispatch();

  return (
    <article className={styles.pizzaItem}>
      <Link className={styles.link} to={`pizza/${id}`}>
        <img src={img} alt='Pizza' width={260} height={260} />
        <h2 className={styles.title}>{name}</h2>
      </Link>
      <div className={styles.config}>
        <div className={styles.configBtnWrapper}>
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
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
      <div className={styles.bottom}>
        <p className={styles.price}>От {price} ₴</p>
        <button
          className={styles.bottomBtn}
          onClick={() => {
            setPizzaCount(pizzaCount + 1);
            dispatch(
              addCartItem({
                name,
                img,
                activeType: activeType === 0 ? 'Традиционная' : 'Тонкая',
                activeSize,
                price,
                pizzaCount,
              })
            );
          }}
        >
          <span className={styles.bottomBtnText}>Добавить</span>
          <span className={styles.bottomBtnCounter}>
            {items.filter((item) => item.name === name)
              ? items
                  .filter((item) => item.name === name)
                  .reduce((reducer, item) => (reducer += item.pizzaCount), 0)
              : 0}
          </span>
        </button>
      </div>
    </article>
  );
};

export default PizzaItem;
