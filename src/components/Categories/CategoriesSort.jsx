import { useState } from 'react';
import styles from './Categories.module.css';
import { Fade } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setSort } from '../../redux/slices/filterSlice';

const CategoriesSort = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const sortBy = useSelector((store) => store.filterSlice.sort);
  const dispatch = useDispatch();

  const sortTypes = [
    {
      name: 'Популярности (DESC)',
      value: 'rating&order=desc',
    },
    {
      name: 'Популярности (ASC)',
      value: 'rating&order=ASC',
    },
    {
      name: 'Цене (DESC)',
      value: 'price&order=desc',
    },
    {
      name: 'Цене (ASC)',
      value: 'price&order=ASC',
    },
    {
      name: 'Алфавиту (DESC)',
      value: 'title&order=desc',
    },
    {
      name: 'Алфавиту (ASC)',
      value: 'title&order=asc',
    },
  ];

  console.log('categories sort render');

  return (
    <div className={styles.sort}>
      <p className={styles.sortByText}>
        <svg
          width='10'
          height='6'
          viewBox='0 0 10 6'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z'
            fill='#2C2C2C'
          ></path>
        </svg>
        Сортировать по:
      </p>
      <button
        className={styles.sortText}
        onClick={() => setPopupVisible(!popupVisible)}
      >
        {sortBy.name}
      </button>
      <Fade in={popupVisible}>
        <ul
          className={styles.popup}
          onMouseLeave={() => setPopupVisible(false)}
        >
          {sortTypes.map((sortType, index) => (
            <li
              key={index}
              className={`${styles.popupItem} ${
                sortType.value === sortBy.value ? styles.popupItemActive : ''
              }`}
              onClick={() => {
                setPopupVisible(false);
                dispatch(setSort(index));
              }}
            >
              {sortType.name}
            </li>
          ))}
        </ul>
      </Fade>
    </div>
  );
};

export default CategoriesSort;
