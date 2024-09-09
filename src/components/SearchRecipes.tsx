import { useContext, useMemo, useState } from 'react'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Results } from '../context/SearchResultsProvider';
import { useFetch } from '../hooks/useFetch';

export const SearchRecipes = () => {

  const context = useContext(Results);

  const { isLoading } = useFetch();

  if (!context) {
    throw new Error('search error')
  }

  const { data } = context;

  return (                                             
    <div>
      {
         isLoading ? <h2>Loading...</h2> :
         <Autocomplete
          id="free-solo-demo"
          freeSolo
          options={data?.hits?.map(({ recipe }) => recipe.label) || []}
          renderInput={(params) => <TextField {...params} label="Search recipe keywords!" />}
     />
      }
    </div>     
  )                                                                                      

}

