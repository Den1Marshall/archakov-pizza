import { useState } from 'react';
import styles from './Categories.module.css';
import CategoriesSort from './CategoriesSort';

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    'Все',
    'Мясные',
    'Вегетарианские',
    'Гриль',
    'Острые',
    // 'Закрытые',
  ];

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
