# Recipe Finder Application

The **Recipe Finder Application** is a web-based platform that allows users to search for recipes based on their preferences and dietary requirements.

Users can explore a database of recipes, view detailed information about each recipe, and save their favorite recipes for future reference.

# Specs

> Design Library: [Material UI ](https://mui.com/material-ui/all-components/)
>
> State Management: [useState](https://react.dev/reference/react/useState), [useContext](https://react.dev/reference/react/useContext).
>
> Data Fetch: [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch), [Axios](https://axios-http.com/docs/intro), [React Query](https://tanstack.com/query/latest)
>
> > The application fetches recipes from the [Edamam API](https://developer.edamam.com/edamam-docs-recipe-api).
> >
> > **APP_ID**: a99bd604
> >
> > **APP_KEY**: 801b3f6953e413a5d229de1043ba6dbd

# Implementation
tgbv 
## Main

> Implement a tab system using the [Tab Component](https://mui.com/material-ui/react-tabs/)
>
> Tab 1 will be for Searching
>
> Tab 2 will be for Favorites
 
## Search

> Users can search for recipes by entering **keywords** or **ingredients** in the [Autocomplete Component](https://mui.com/material-ui/react-autocomplete/).
>
> Please have validation that a search term is required.
>
> Display search results in a [Table Component](https://mui.com/material-ui/react-table/) with recipe thumbnail, name, and View Recipe column.
>
> User clicking View Recipe should be take to the Recipe Detail View

## Recipe Detail View

> Include a [BreadCrumb Component](https://mui.com/material-ui/react-breadcrumbs/) to go back to search
>
> Present the following information using [Card Component](https://mui.com/material-ui/react-card/)
>
> Recipe Name in the Header
>
> Includes a list of ingredients, nutritional information in the body
>
> A link in the footer that opens a new window to the external uri
>
> A link in the footer that allows the user to save the recipe to Favorites

## Favorite Recipes

> Display favorites in a [Table Component](https://mui.com/material-ui/react-table/) with recipe thumbnail, name, View Recipe, Remove column.
>
> User clicking View Recipe should be take to the Recipe Detail View ( reuse same component as [Recipe Detail View](#recipe-detail-view))
>
> User clicking Remove should be prompted with [Confirmation](https://mui.com/material-ui/react-dialog/). Only after confirming, removing the item from Favorites Storage
