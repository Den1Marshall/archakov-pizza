import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import styles from './Search.module.css';
import { useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';

const Search = () => {
  const { inputValue, setInputValue } = useContext(SearchContext);
  const onInput = (e) => setInputValue(e.target.value);
  const clearInput = () => setInputValue('');

  return (
    <div className={styles.search}>
      <SearchIcon />
      <input
        className={styles.input}
        value={inputValue}
        onInput={onInput}
        type='text'
        placeholder='Поиск пиццы...'
      />
      {inputValue && (
        <button className={styles.close} onClick={clearInput}>
          <CloseIcon />
        </button>
      )}
    </div>
  );
};

export default Search;
