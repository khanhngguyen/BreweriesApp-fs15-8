import React from 'react'
import { useRouteError } from 'react-router'
import { Link } from 'react-router-dom'

const BreweryError = () => {
    const error: any = useRouteError();
  return (
    <div>
        <h2>Error</h2>
        <p>{error.message}</p>
        <p>Could not find that Brewery</p>
        <Link to='/'>Back to Breweries list</Link>
    </div>
  )
}

export default BreweryError