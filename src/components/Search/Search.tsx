import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import styles from './Search.module.css';
import { FC, useCallback, useContext, useRef, useState } from 'react';
import { SearchContext } from '../../context/SearchContext';
import debounce from 'lodash.debounce';

const Search: FC = () => {
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

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    inputDebounce(e.target.value);
  };

  const clearInput = (): void => {
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
        onChange={onChange}
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
