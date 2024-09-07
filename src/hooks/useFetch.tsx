import { useState, useEffect } from 'react'
import axios from 'axios'

export const useFetch = () => {
    const [data, setData] = useState();
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    
    const url = 'https://api.edamam.com/api/recipes/v2.'

    useEffect(() => {
        const fetchRecipes = async () => {
            setIsLoading(true);
            try {
                const req = await axios.get(url);
                setData(req.data);

            } catch (err) {
                console.log(err)
            } finally {
                setIsLoading(false);
            }
        }

        fetchRecipes()
    })


  return ({ data, isLoading, error, searchTerm })
}

