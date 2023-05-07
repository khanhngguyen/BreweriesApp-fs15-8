import React from 'react';
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import './App.css';

//pages
import Home, { breweriesLoader } from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

//layouts
import RootLayout from './layouts/RootLayout';
import Breweries from './pages/Breweries';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route 
      path='/' 
      element={<Home />} 
      loader={breweriesLoader}>
      </Route>
    <Route path='about' element={<About />} />

      <Route path='*' element={<NotFound />} />
    </Route>
  )
)

function App() {
  return (
   <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
