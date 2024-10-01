import { useContext } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Results } from '../context/SearchResultsProvider';
import Button from '@mui/material/Button';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { red } from '@mui/material/colors'

export const FavoriteRecipes = () => {
    const context = useContext(Results);
    if (!context) {
        throw new Error('There is no data available')
    }
    const { favorites } = context;

    const removeFavoriteItem = (item: string) => {
        // logic to remove item from the favorites list
        console.log(item)
    }

  return (
    <div>
        { favorites.length === 0 ? ( <h2>No favorites yet...</h2> ) :
        (<TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell></TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell></TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {favorites.map((f, index) => (
                <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell align="right">
                        <img src={f.image} alt={f.label} style={{ width: '100px', height: 'auto' }} />
                    </TableCell>
                    <TableCell align="left">{f.label}</TableCell>
                    <TableCell align="left"><Button variant='contained' onClick={() => console.log(index)}>View Recipe</Button></TableCell>
                    <TableCell><Button onClick={() => removeFavoriteItem(f.label)}><RemoveCircleIcon fontSize='large' sx={{ color: red[600] }}/></Button></TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>)
        }
    </div>
  )
}
