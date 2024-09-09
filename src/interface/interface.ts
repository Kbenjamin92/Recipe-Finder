export interface Recipe {
    label: string;
    image: string;
    uri: string;
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