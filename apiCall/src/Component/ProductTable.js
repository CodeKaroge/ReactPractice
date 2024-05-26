import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Table.css';

const apiUrl = 'https://dummyjson.com/products'
function ProductTable() {
    const [productList, setProductList] = useState([])
    const [search, setSearch] = useState('')

    const fetchData = async () => {
        const response = await axios.get(`${apiUrl}`)
        setProductList(response.data.products)
    }

    const handleSearch = async () => {
        const response = await axios.get(`${apiUrl}/search?q=${search}`)
        setProductList(response.data.products)
    }

    const resetAll = () => {
        fetchData()
        setSearch('')
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <input
                type='text'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Search Here...'
            />
            <button onClick={handleSearch}>Search Here</button>
            {search.length > 0 &&
                <button onClick={resetAll}>Reset All</button> 
            }

            < table className="styled-table">
                <thead >
                    <th > Id </th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>category</th>
                    <th>price</th>
                    <th>
                        brand
                    </th>
                    <th>thumbnail</th>
                </thead>
                {productList.map((product, index) => (
                    <tbody key={index} >
                        <td>{product.id}</td>
                        <td>{product.title}</td>
                        <td>{product.description}</td>
                        <td>{product.category}</td>
                        <td>{product.price}</td>
                        <td>{product.brand}</td>
                        <td> <img src={product.thumbnail} alt='Not found' /></td>
                    </tbody>
                ))}
            </table>
        </div >
    )
}

export default ProductTable
