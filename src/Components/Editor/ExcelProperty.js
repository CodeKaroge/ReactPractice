import React, { useEffect, useState } from 'react'

function ExcelProperty() {
    const [data, setData] = useState([])
    const [row, setRow] = useState(3)
    const [col, setCol] = useState(3)
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
        if (!!selectedCellForInput && (selectedCellForInput.row !== row || selectedCellForInput.column !== column)) {
            setSelectedCellForInput(null)
        }
        setSelectedCell({ row, column })
    }
    useEffect(() => {
        setData(Array.from({ length: row }, () => Array(col).fill("")))
    }, [row, col])

    return (
        <div>
            <button onClick={() => setRow(row + 1)}>Add row</button>
            <button onClick={() => setCol(col + 1)}>Add Column</button>
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