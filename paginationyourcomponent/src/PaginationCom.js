import React, { useState } from 'react'
import PaginationChildComponent from './PaginationChildComponent';

function PaginationCom() {
    const [currentPage, setCurrentPage] = useState(1)
    const lengthOfArray = 30;
    const dataPerPage = 5

    const GenerateArray = (lengthOfArray) => {
        let out = []
        for (let i = 0; i < lengthOfArray; i++) {
            out.push(`User ${i + 1}`)
        }
        return out
    }

    let data = GenerateArray(lengthOfArray)
    


    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    const indexOfLastPage = currentPage * dataPerPage
    const indexOfFirstPage = indexOfLastPage - dataPerPage
    const currentPageData = data.slice(indexOfFirstPage, indexOfLastPage)
    return (
        <div>
            <div style={{
                display: "flex",
                justifyContent: 'center'
            }} >
                {
                    currentPageData.map((item, index) => {
                        return (
                            <div key={index}
                                style={{
                                    width: '200px',
                                    height: '200px',
                                    background: 'red',
                                    borderRadius: '10px',
                                    marginRight: '10px',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    alignItems: 'center',
                                    fontSize: '40px'
                                }}
                            >
                                {item}
                            </div>
                        )
                    })
                }
            </div>
            <PaginationChildComponent
                currentPage={currentPage}
                totalPage={Math.ceil(lengthOfArray / dataPerPage)}
                handlePageChange={handlePageChange}
            />
        </div>
    )
}

export default PaginationCom