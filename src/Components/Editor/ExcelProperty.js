import React, { useState } from 'react'

function ExcelProperty() {
    const [data, setData] = useState([
        ['A1', 'B1', 'C1'],
        ['A2', 'B2', 'C2'],
        ['A3', 'B3', 'C3'],
        ['A3', 'B3', 'C3'],
        ['A3', 'B3', 'C3'],
    ])
    const [selectedCell, setSelectedCell] = useState(null)
    const [selectedCellForInput, setSelectedCellForInput] = useState(null)

    const handleChange = (row, col, value) => {
        const newData = [...data]
        newData[row][col] = value
        setData(newData)
    }

    const handleDoubleClick = (row, column) => {
        setSelectedCellForInput({ row, column })
    }
    const handleSingleClick = (row, column) => {
        setSelectedCell({ row, column })
    }

    return (
        <div>
            <table>
                <tbody>
                    {data.map((item, rowIndex) => (
                        <tr key={rowIndex}>
                            {item.map((innerItem, columnIndex) => (
                                <td
                                    onClick={() => handleSingleClick(rowIndex, columnIndex)}
                                    onDoubleClick={() => handleDoubleClick(rowIndex, columnIndex)}
                                    key={columnIndex}
                                    style={{
                                        backgroundColor: selectedCell && selectedCell.row === rowIndex
                                            && selectedCell.column === columnIndex ? 'green' : 'transparent'
                                    }}
                                >{
                                        (
                                            selectedCellForInput && selectedCellForInput.row === rowIndex && selectedCellForInput.column === columnIndex
                                                ? <input type="text"
                                                    value={innerItem}
                                                    onChange={(e) => handleChange(rowIndex, columnIndex, e.target.value)}
                                                /> : innerItem
                                        )
                                    }</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ExcelProperty