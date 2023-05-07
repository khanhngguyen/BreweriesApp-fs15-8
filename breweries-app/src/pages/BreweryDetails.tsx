import React from 'react'
import { useLoaderData } from 'react-router'
import axios from 'axios';

import Brewery from '../interfaces/Brewery';
import { Link } from 'react-router-dom';

interface GetBreweryDetailsResponse {
    data: Brewery
}

const BreweryDetails = () => {
    const brewery = useLoaderData() as Brewery;

    return (
        <div className='brewery-details'>
            <p><Link to='/'>Back</Link></p>
            <h2>Details for {brewery.name}</h2>
            <p>Name: {brewery.name}</p>
            <p>Type: {brewery.brewery_type}</p>
            <p>City: {brewery.city}</p>
            <p>Website: {brewery.website_url}</p>
     </div>
    )
}

export default BreweryDetails

//loader function
export const breweryDetailsLoader = async ({ params } : { params: any}) => {
    const { id } = params;
    
    try {
        const { data, status } = await axios.get<GetBreweryDetailsResponse>('https://api.openbrewerydb.org/v1/breweries/' + id, 
        {
            headers: {
                Accept: 'application/json',
            },
        });
        console.log('response status: ', status);
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            // console.log('error message: ', error.message);
            throw new Error(`Error: ${error.message}`)
        } else {
            console.log('unexpected error:', error);
            return 'An unexpected error has occurred';
        }
    }
}