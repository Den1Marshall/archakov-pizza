import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import styles from './Search.module.css';
import { useContext, useRef } from 'react';
import { SearchContext } from '../../context/SearchContext';

const Search = () => {
  const { inputValue, setInputValue } = useContext(SearchContext);

  const inputRef = useRef(null);

  const onInput = (e) => setInputValue(e.target.value);

  const clearInput = () => {
    setInputValue('');
    inputRef.current.focus();
  };

  return (
    <div className={styles.search}>
      <SearchIcon />
      <input
        className={styles.input}
        value={inputValue}
        onInput={onInput}
        ref={inputRef}
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
