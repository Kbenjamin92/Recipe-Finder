import { useContext, useState } from 'react'
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
import { Recipe } from '../interface/interface';
import Alert from '@mui/material/Alert'

interface RecipeDetailsProps {
    recipe: Recipe;
}

export const RecipeDetails = ({ recipe }: RecipeDetailsProps) => {
    const [triggerAlert, setTriggerAlert] = useState(false);
    const context = useContext(Results);
    if (!context) {
      throw new Error('There is no data available')
    }
    const { setIsCardSelected, setFavorites, favorites } = context;

    const addRecipeToFavorites = () => {
        if (!favorites.some((fav: Recipe) => fav.label === recipe.label)) {
            const updatedFavorites = [recipe, ...favorites];
            setFavorites(updatedFavorites); 
        }
        setTriggerAlert(true)
    }
      
  return (
    <div>
         <Breadcrumbs aria-label="breadcrumb">
            <Button onClick={() => setIsCardSelected(false)}>
                <Link
                underline="hover"
                sx={{ display: 'flex', alignItems: 'center' }}
                color="inherit"
                >
                <SearchIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                Back to search
                </Link>
            </Button>
        </Breadcrumbs>    
        <Card sx={{ maxWidth: 345 }}>
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
            { recipe.ingredientLines.map((ingredient, index) => <ul key={index}><li>{ingredient}</li></ul>)}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" href={`${recipe.url}`} target='blank' rel="noopener noreferrer">Learn More</Button>
            <Button size="small" onClick={() => addRecipeToFavorites()}>Add to favorites</Button>
        </CardActions>
        </Card>
        {triggerAlert && (
            <Alert severity="success">Recipe successfully added to favorites!</Alert>
        )}
    </div>
  )
}

