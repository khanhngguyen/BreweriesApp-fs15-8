import React from 'react'
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
        <h2>About Breweries</h2>
        <p>An app to fetch, display, and search for brewery companies from the given API endpoint, using React and TypeScript</p>
        <p><Link to='/'>Back</Link></p>
    </div>
  )
}

export default About