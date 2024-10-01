import { useContext, useState } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { Results } from '../context/SearchResultsProvider';
import { useFetch } from '../hooks/useFetch'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import { RecipeDetails } from './RecipeDetails'
import { Recipe } from '../interface/interface'

export const ResultsTable = () => {
  const { isLoading } = useFetch();
  const context = useContext(Results);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe>();

  if (!context) {
    throw new Error('There is no data available')
  }
  const { data, searchTerm, isCardSelected, setIsCardSelected } = context;
  const filterData = data?.hits.filter((results) => results.recipe.label.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleSelectRecipe = (index: number) => {
    const selected = filterData?.[index]?.recipe;
    setSelectedRecipe(selected); 
    setIsCardSelected(true);
    console.log(filterData)
  };

  return (
    <div>
        {
        isLoading && !data ? ( <h2>Loading...</h2> ) :
        selectedRecipe && isCardSelected ?
        ( <RecipeDetails recipe={selectedRecipe} /> ) :
        <>
        {filterData?.length !== 0 ?  
        (<TableContainer component={Paper}>
            <Table>
              <TableHead>
                  <TableRow>
                      <TableCell></TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Description</TableCell>
                  </TableRow>
              </TableHead>
              {filterData?.map(({ recipe }, index) => (
                <TableBody>
                    <TableRow key={index}>
                    <TableCell>
                        <img src={recipe.image} alt={recipe.label} style={{ width: '100px', height: 'auto'}} />
                    </TableCell>
                    <TableCell>{recipe.label}</TableCell>
                    <TableCell><Button variant='contained' color='primary' onClick={() => handleSelectRecipe(index)}>View Recipe</Button></TableCell>
                    </TableRow>
                </TableBody>
                ))}
            </Table>
        </TableContainer>)
       : null }
        </>
        }
    </div>
  )
}

