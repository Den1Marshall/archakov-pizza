import { useDispatch, useSelector } from 'react-redux';
import styles from './Categories.module.css';
import CategoriesSort from '../Sort/Sort';

import { setCategoryID } from '../../redux/slices/filterSlice';
import { FC } from 'react';
import { RootState } from '../../redux/store';

const Categories: FC = () => {
  const categoryID = useSelector(
    (state: RootState) => state.filterSlicePersistedReducer.categoryID
  );

  const dispatch = useDispatch();

  type Categories = string[];

  const categories: Categories = [
    'Все',
    'Мясные',
    'Вегетарианские',
    'Гриль',
    'Острые',
    'Закрытые',
  ];

  return (
    <section className={styles.categories}>
      <div className={styles.btnWrapper}>
        {categories.map((category, index) => (
          <button
            key={index}
            className={
              categoryID === index
                ? `${styles.btn} ${styles.btnActive}`
                : styles.btn
            }
            onClick={() => dispatch(setCategoryID(index))}
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
