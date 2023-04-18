import styles from './Categories.module.css';
import CategoriesSort from './CategoriesSort';

const Categories = ({ activeCategory, setActiveCategory }) => {
  const categories = [
    'Все',
    'Мясные',
    'Вегетарианские',
    'Гриль',
    'Острые',
    'Закрытые',
  ];

  console.log('categories render');

  return (
    <section className={styles.categories}>
      <div className={styles.btnWrapper}>
        {categories.map((category, index) => (
          <button
            key={index}
            className={
              activeCategory === index
                ? `${styles.btn} ${styles.btnActive}`
                : styles.btn
            }
            onClick={() => setActiveCategory(index)}
          >
            {category}
          </button>
        ))}
      </div>
      <CategoriesSort />
    </section>
  );
};

export default Categories;
