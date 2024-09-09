import { createContext, useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { SearchResultsContextTypes } from '../interface/interface';

export const Results = createContext<SearchResultsContextTypes | undefined>(undefined);

export const SearchResultsProvider = ({ children }: any) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isCardSelected, setIsCardSelected] = useState<boolean>(false)
  
  const handleSearchTerm = (event: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(event.target.value);

  const { data } = useFetch(searchTerm);
    
  return (
    <Results.Provider value={{ 
      data, 
      handleSearchTerm, 
      searchTerm,
      isCardSelected,
      setIsCardSelected
       }}>
      { children }
    </Results.Provider>
  )
}


