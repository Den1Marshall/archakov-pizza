import styles from './PizzaItem.module.css';
import PizzaItemBottomBtn from './PizzaItemBottomBtn';
import PizzaItemConfig from './PizzaItemConfig';

const PizzaItem = ({ name, img, types, sizes, price }) => {
  return (
    <article className={styles.pizzaItem}>
      <img src={img} alt='Pizza' width={260} height={260} />
      <h2 className={styles.title}>{name}</h2>
      <PizzaItemConfig sizes={sizes} types={types} />
      <div className={styles.bottom}>
        <p className={styles.price}>От {price} ₴</p>
        <PizzaItemBottomBtn />
      </div>
    </article>
  );
};

export default PizzaItem;
