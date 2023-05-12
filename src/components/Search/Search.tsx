import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import styles from './Search.module.css';
import { useCallback, useContext, useRef, useState } from 'react';
import { SearchContext } from '../../context/SearchContext';
import debounce from 'lodash.debounce';

const Search = () => {
  const { setInputValue } = useContext(SearchContext);
  const [value, setValue] = useState<string>('');

  const inputRef = useRef<HTMLInputElement>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const inputDebounce = useCallback(
    debounce((str: string) => {
      setInputValue(str);
    }, 250),
    []
  );

  const onInput = (e: any) => {
    setValue(e.target.value);
    inputDebounce(e.target.value);
  };

  const clearInput = () => {
    setValue('');
    setInputValue('');
    inputRef.current?.focus();
  };

  return (
    <div className={styles.search}>
      <SearchIcon />
      <input
        className={styles.input}
        value={value}
        onInput={onInput}
        ref={inputRef}
        type='text'
        placeholder='Поиск пиццы...'
      />
      {value && (
        <button className={styles.close} onClick={clearInput}>
          <CloseIcon />
        </button>
      )}
    </div>
  );
};

export default Search;
