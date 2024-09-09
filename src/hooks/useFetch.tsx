import { useState, useEffect } from 'react'
import axios from 'axios'
import { SearchResultsTypes } from '../interface/interface';


export const useFetch = (value?: string) => {
    const [data, setData] = useState<SearchResultsTypes | undefined>();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');                                                                                       

    //  const apiKey = process.env.REACT_APP_API_KEY;
    //  const apiID = process.env.REACT_APP_API_ID
    
    useEffect(() => {
        const fetchRecipes = async () => {
            setIsLoading(true);
            try {
                const req = await axios.get<SearchResultsTypes>(`https://api.edamam.com/api/recipes/v2/?type=public&q=${value}&app_id=974b0bc2&app_key=b7805aadae37cd7b9bb9836bca3480e3`);
                setData(req.data);
            } catch (err) {
                console.log(err)
            } finally {
                setIsLoading(false);
            }
        }
        fetchRecipes();
    }, [])

  return ({ data, isLoading, error })
}

