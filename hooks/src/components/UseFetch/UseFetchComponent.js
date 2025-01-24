import React from 'react'
import useFetch from './useFecth';

function UseFetchComponent() {
    const url = "https://jsonplaceholder.typicode.com/posts"

    const { data, loading, error } = useFetch(url);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    
    return (
        <ul>
            {data?.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    )
}

export default UseFetchComponent
