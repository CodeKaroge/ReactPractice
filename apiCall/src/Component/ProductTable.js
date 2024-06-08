import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Table.css';
import ProductDetails from './ProductDetails';

const apiUrl = 'https://dummyjson.com/products'
function ProductTable() {
    const [productList, setProductList] = useState([])
    const [search, setSearch] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const [productDetails, setProductDetails] = useState({})
    const [sortOrder, setsortOrder] = useState('asc')
    const [selectedValue, setSelectedValue] = useState('')
    const [dropdownOption, setDropdownOption] = useState([])

    const handleOpenModal = async (id) => {
        const response = await axios.get(`${apiUrl}/${id}`)
        setProductDetails(response.data)
        setIsOpen(true)
    }


    const handleCloseModal = () => {
        setIsOpen(false)
    }

    const handleSort = async (onBasisOf) => {
        const response = await axios.get(`${apiUrl}?sortBy=${onBasisOf}&order=${sortOrder}`)
        setsortOrder((prev) => prev === 'asc' ? 'desc' : 'asc')
        setProductList(response.data.products)
    }

    const handleDropdownChange = (e) => {
        setSelectedValue(e.target.value)
    }

    const fetchData = async () => {
        const response = await axios.get(`${apiUrl}`)
        const responseOption = await axios.get(`${apiUrl}/category-list`)
        setProductList(response.data.products)
        setDropdownOption(responseOption.data)
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
            <button className='primaryButton' onClick={handleSearch}>Search Here</button>
            {search.length > 0 &&
                <button className='primaryButton' onClick={resetAll}>Reset All</button>
            }

            <select value={selectedValue} onChange={handleDropdownChange}>
                <option value='' disabled >Select option</option>
                {dropdownOption.map((item, index) => (
                    <option value={item} >{item}</option>
                ))}
            </select>

            <ProductDetails isOpen={isOpen} handleCloseModal={handleCloseModal}>
                <div className='product-box'>
                    <div className='product-details'>
                        <h1>Details</h1>
                        <p>Title : {productDetails.title}</p>
                        <p>Description : {productDetails.description}</p>
                        <p>Category : {productDetails.category}</p>
                        <p>Price : {productDetails.price}</p>
                        <p>Discount : {productDetails.discountPercentage}</p>
                        <p>Rating : {productDetails.rating}</p>
                        <p>Brand : {productDetails.brand}</p>
                    </div>
                    <div>
                        <p>Image :</p>
                        <img src={productDetails.thumbnail} alt='Not found'></img>
                    </div>
                </div>
                <button onClick={() => setIsOpen(false)}>Close</button>
            </ProductDetails>
            <table className="styled-table">
                <thead >
                    <th>Id <span style={{ cursor: 'pointer' }} onClick={() => handleSort('id')} >↑</span> </th>
                    <th>Title <span style={{ cursor: 'pointer' }} onClick={() => handleSort('title')} >↑</span></th>
                    <th>Description <span style={{ cursor: 'pointer' }} onClick={() => handleSort('description')} >↑</span></th>
                    <th>category <span style={{ cursor: 'pointer' }} onClick={() => handleSort('category')} >↑</span></th>
                    <th>price <span style={{ cursor: 'pointer' }} onClick={() => handleSort('price')} >↑</span></th>
                    <th>brand <span style={{ cursor: 'pointer' }} onClick={() => handleSort('brand')} >↑</span></th>
                    <th>thumbnail </th>
                    <th>Action</th>
                </thead>
                {productList.length > 0 && productList.map((product, index) => (
                    <tbody key={index} >
                        <td>{product.id}</td>
                        <td>{product.title}</td>
                        <td>{product.description}</td>
                        <td>{product.category}</td>
                        <td>{product.price}</td>
                        <td>{product.brand}</td>
                        <td><img src={product.thumbnail} alt='Not found' /></td>
                        <td> <button className='primaryButton' onClick={() => handleOpenModal(product.id)} > Details</button> </td>
                    </tbody>
                ))}
            </table>
        </div >
    )
}

export default ProductTable
