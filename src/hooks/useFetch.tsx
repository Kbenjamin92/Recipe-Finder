import { useState, useEffect } from 'react'
import axios from 'axios'
import { SearchResultsTypes } from '../interface/interface';

export const useFetch = (value?: string) => {
    const [data, setData] = useState<SearchResultsTypes | undefined>();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');                                                                                       

     const apiKey = import.meta.env.VITE_API_KEY;
     const apiID = import.meta.env.VITE_API_ID;
    
    useEffect(() => {
        const fetchRecipes = async () => {
            setIsLoading(true);
            try {
                const req = await axios.get<SearchResultsTypes>(`https://api.edamam.com/api/recipes/v2/?type=public&q=${value}&app_id=${apiID}&app_key=${apiKey}`);
                setData(req.data);
                console.log(req.data);
            } catch (err) {
                setError('Keyword or Ingredients is required')
            } finally {
                setIsLoading(false);
            }
        }
        fetchRecipes();
    }, [value])

  return ({ data, isLoading, error })
}

