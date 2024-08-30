
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Searchcountry from './Countrysearch';
// import { Weather } from '../Wheather/wheater';
import EachCountryData from './eachcountry';
import AboutScreen from '../About/AboutScreen';
import Recepe from './recepie';
import Eachrecepe from './eachrecepe';
import Favorites from './Favorites';
import { FavoritesProvider } from './FavoritesContext';


function Stack() {
  return (
    <FavoritesProvider> {/* Wrap the components with FavoritesProvider */}
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Searchcountry} />
        <Route path='Country/:countryname' element={<EachCountryData />} />
        <Route path='/receipe' Component={Recepe} />
        <Route path='/Recepe/:id' Component={Eachrecepe} />
        <Route path='favorites' element={<Favorites />} />
        <Route path='/AboutScreen' Component={AboutScreen} />
      </Routes>
    </BrowserRouter>
  </FavoritesProvider>
  )
}

export default Stack
