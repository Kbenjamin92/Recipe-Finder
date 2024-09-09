import { useContext, useState } from 'react'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Results } from '../context/SearchResultsProvider';

export const SearchRecipes = () => {

  const context = useContext(Results);

  if (!context) {
    throw new Error('search error')
  }
  const { data, handleSearchTerm } = context;

  return (                                             
    <div>      
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        aria-required
        options={data?.hits?.map(({ recipe }) => recipe.label) || []}
        renderInput={(params) => <TextField {...params} onChange={handleSearchTerm} label="Search recipe keywords!" />}
      />
    </div>     
  )                                                                                      

}

