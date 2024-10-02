import React from 'react';
import { Link, useParams } from 'react-router-dom';

function CategoryScreen({ data }) {
    let { category } = useParams();
    const filtedData = data.filter(obj => obj.category === category);
    console.log(filtedData);

    return (
        <div>
            <Link to={'/'}>Back</Link>
            <h1>CategoryScreen</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {filtedData.map((item, index) => {
                    return (
                        <div className='imageTabs'>
                            <Link to='/imageScreen' state={item}>
                                <img src={item.url} alt={item.description} style={{ width: '300px', height: '300px', objectFit: 'cover' }} />
                            </Link>
                            <p>{item.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CategoryScreen
