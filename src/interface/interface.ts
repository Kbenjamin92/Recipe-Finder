import { Dispatch, SetStateAction } from 'react';

export interface SearchResultsContextTypes {
  data: SearchResultsTypes | undefined;
  handleSearchTerm: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchTerm: string;
  isCardSelected: boolean;
  setIsCardSelected: Dispatch<SetStateAction<boolean>>;
  favorites: Recipe[];
  setFavorites: Dispatch<SetStateAction<Recipe[]>>;
}

export interface Recipe {
    label: string;
    image: string;
    uri: string;
    url: string;
    ingredientLines: [];
    healthLabels: [];
  }
  
  export interface Hit {
    recipe: Recipe;
    links: {
      self: string;
    };
  }
  
  export interface SearchResultsTypes {
    from: number;
    to: number;
    count: number;
    hits: Hit[];
  }