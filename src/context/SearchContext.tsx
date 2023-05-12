import { FC, createContext, useState } from 'react';

interface ISearchContext {
  inputValue: string;
  setInputValue: (value: string) => void;
}

interface SearchContextProviderProps {
  children: React.ReactNode;
}

export const SearchContext = createContext<ISearchContext>({
  inputValue: '',
  setInputValue: () => {},
});

const SearchContextProvider: FC<SearchContextProviderProps> = ({
  children,
}) => {
  const [inputValue, setValue] = useState('');

  const setInputValue = (value: string) => {
    setValue(value);
  };

  return (
    <SearchContext.Provider value={{ inputValue, setInputValue }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
