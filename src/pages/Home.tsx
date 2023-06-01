import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router';
import axios from 'axios';
import {
    Card,
    CardContent,
} from '@mui/material'

import Brewery from '../interfaces/Brewery';

interface GetBreweriesResponse {
    data: Brewery[]
}

const Home = () => {
    const [query, setQuery] = useState('');
    const breweries = useLoaderData() as Brewery[];
    const filteredList = breweries.filter(brewery => {
        return brewery.name.toLowerCase().includes(query.toLowerCase());
    })
    return (
        <div className='home'>
            <h2>Breweries list</h2>
            <input
            type='search'
            placeholder='search Brewery by name'
            value={query}
            onChange={e => setQuery(e.target.value)}
            />
            <div className='breweries-list'>
                {/* {breweries.map(brewery => (
                    <Link to={'brewery/' + brewery.id.toString()} key={brewery.id}>
                        <p>{brewery.name}</p>
                        <p>{brewery.brewery_type}</p>
                        <p>{brewery.city}</p>
                        <p>{brewery.website_url}</p>
                    </Link>
                ))} */}
                {filteredList.map(brewery => (
                    <Card
                    sx={{ minWidth: 275 }}
                    key={brewery.id}
                    elevation={3}
                    className='brewery'
                    >
                        <CardContent>
                            <Link to={'brewery/' + brewery.id.toString()}>
                                <h2>{brewery.name}</h2>
                                <p>Brew type: {brewery.brewery_type}</p>
                                <p>Address: {brewery.address_1} {brewery.postal_code} {brewery.city}</p>
                                <p>Phone: +{brewery.phone}</p>
                                <p>{brewery.website_url}</p>
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default Home

export const breweriesLoader = async () => {
    // const response = await fetch('https://api.openbrewerydb.org/v1/breweries');
    // return response.json();
    try {
        const { data } = await axios.get<GetBreweriesResponse>('https://api.openbrewerydb.org/v1/breweries?by_country=england&per_page=62',
        {
            headers: {
                Accept: 'application/json',
            },
        });
        // console.log(JSON.stringify(data, null, 4));
        // console.log('response status: ', status);
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