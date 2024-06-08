import React  from 'react';
import './ProductDetails.css'

function ProductDetails({ isOpen, handleCloseModal, children }) {
  return (
    <div className={`modal ${isOpen ? "open" : ""}`} >
      <div className='modal-content'>
        <span className='close' onClick={handleCloseModal}>&times;</span>
        {children}
      </div>
    </div>
  )
}

export default ProductDetails
