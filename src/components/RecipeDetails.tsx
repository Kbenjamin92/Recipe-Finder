import { useContext } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Results } from '../context/SearchResultsProvider';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import SearchIcon from '@mui/icons-material/Search';

export const RecipeDetails = () => {

    const context = useContext(Results);
  
    if (!context) {
      throw new Error('search error')
    }
  
    const { data, searchTerm, setIsCardSelected } = context;

    const filterDetails = data?.hits.filter((results) => results.recipe.label.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div>
         <Breadcrumbs aria-label="breadcrumb">
            <Button onClick={() => setIsCardSelected(false)}>
                <Link
                underline="hover"
                sx={{ display: 'flex', alignItems: 'center' }}
                color="inherit"
                href="/"
                >
                <SearchIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                Search
                </Link>
            </Button>
        </Breadcrumbs>
        {
            filterDetails ? filterDetails.map(({ recipe }, index) => (
            <Card sx={{ maxWidth: 345 }} key={index}>
            <CardMedia
                sx={{ height: 140 }}
                image={ recipe.image }
                title={ recipe.label }
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                { recipe.label }
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                { recipe.ingredientLines.map((ingredient) => <p>{ingredient}</p>)}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" href={`${recipe.url}`} target='blank' rel="noopener noreferrer">Learn More</Button>
                <Button size="small">Add to favorites</Button>
            </CardActions>
            </Card>
            ))
            : null
        }
    </div>
  )
}

