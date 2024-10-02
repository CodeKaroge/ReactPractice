import React from 'react'
import { Link } from 'react-router-dom';

function LandingPage({ data }) {
    const filterCategory = [...new Set(data.map(cat => cat.category))];
    return (
        <div>
            <h1>Photo Gallery</h1>
            {filterCategory.map((category, item) => {
                return (
                    <Link key={item} to={`categoryScreen/${category}`}>
                        <button key={item} style={{margin: '0px 10px'}}>{category}</button>
                    </Link>
                )
            })}
        </div>
    )
}

export default LandingPage
