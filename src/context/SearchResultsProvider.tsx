import { createContext } from 'react';
import { useFetch } from '../hooks/useFetch';
import { SearchResultsTypes } from '../interface/interface';

interface SearchResultsContextTypes {
  data: SearchResultsTypes | undefined;
}

export const Results = createContext<SearchResultsContextTypes | undefined>(undefined);

export const SearchResultsProvider = ({ children }: any) => {
  
  const { data } = useFetch();
    
  return (
    <Results.Provider value={{ data }}>
      { children }
    </Results.Provider>
  )
}


