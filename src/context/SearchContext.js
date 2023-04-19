import { createContext, useState } from 'react';

export const SearchContext = createContext(null);

const SearchContextProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <SearchContext.Provider value={{ inputValue, setInputValue }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
