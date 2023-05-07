import React from 'react'
import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router';
import axios from 'axios';

import Brewery from '../interfaces/Brewery';

interface GetBreweriesResponse {
    data: Brewery[]
}

const Home = () => {
    const breweries = useLoaderData() as Brewery[];
  return (
    <div className='breweries-list'>
        <h2>Breweries list</h2>
        <form>
            <input
            type='text'
            placeholder='search brewery'
            />
            <button type='submit'>Search</button>
        </form>
         <div>
            {breweries.map(brewery => (
                <Link to={'brewery/' + brewery.id.toString()} key={brewery.id}>
                    <p>{brewery.name}</p>
                    <p>{brewery.brewery_type}</p>
                    <p>{brewery.city}</p>
                    <p>{brewery.website_url}</p>
                </Link>
            ))}
            {/* {breweries.map(brewery => (
                <p key={brewery.id}>{brewery.name}</p>
            ))} */}
        </div>
    </div>
  )
}

export default Home

export const breweriesLoader = async () => {
    // const response = await fetch('https://api.openbrewerydb.org/v1/breweries');
    // return response.json();
    try {
        const { data, status } = await axios.get<GetBreweriesResponse>('https://api.openbrewerydb.org/v1/breweries',
        {
            headers: {
                Accept: 'application/json',
            },
        });
        console.log(JSON.stringify(data, null, 4));
        console.log('response status: ', status);
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
        } else {
            console.log('unexpected error:', error);
            return 'An unexpected error has occurred';
        }
    }
}