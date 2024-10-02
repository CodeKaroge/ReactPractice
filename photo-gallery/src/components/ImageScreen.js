import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function ImageScreen() {
    let location = useLocation();
    let { description, url } = location.state;
    console.log(description, url);

    return (
        <div  className='imageViewMain'>
            <Link to={'/'}>Back</Link>
            <h1>Image Screen</h1>
            <img src={url} alt={description} className='imageView' />
        </div>
    )
}

export default ImageScreen
