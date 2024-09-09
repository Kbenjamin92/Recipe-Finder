import { useState } from 'react'
import './App.css'
import { Tab, Box } from '@mui/material'
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { SearchRecipes } from './components/SearchRecipes';
import { SearchResultsProvider } from './context/SearchResultsProvider';


function App() {
  const [value, setValue] = useState(0)

  const handleTabChange = (e: React.SyntheticEvent, newValue: number) => setValue(newValue)

  return (
    <>
    <h1>Recipe Finder</h1>
    <Box sx={{ width: '100%', typography: 'body1' }}>
    <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleTabChange} aria-label="lab API tabs example">
            <Tab label="Search Recipes" value="0" />
            <Tab label="Favorites" value="1" />
          </TabList>
        </Box>
        <TabPanel value="0">
          <SearchResultsProvider>
            <SearchRecipes />
          </SearchResultsProvider>
        </TabPanel>
        <TabPanel value="1">Favorites</TabPanel>
      </TabContext>
    </Box>
    </>
  )
}

export default App
