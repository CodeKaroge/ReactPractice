import React from 'react'

function PaginationChildComponent({ currentPage, totalPage, handlePageChange }) {
    return (
        <div>
            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage <= 1}  >Prev</button>
            <sapn> {currentPage} of {totalPage}</sapn>
            <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPage} >Next</button>
        </div>
    )
}

export default PaginationChildComponent