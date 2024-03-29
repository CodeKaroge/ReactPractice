import React, { useState } from 'react';

const ExcelApp = () => {
  const [data, setData] = useState([
    ['A1', 'B1', 'C1'],
    ['A2', 'B2', 'C2']
  ]);
  const [selectedCell, setSelectedCell] = useState(null);
  const [selectedCellForInput, setSelectedCellForInput] = useState(null);
  const handleCellChange = (rowIndex, colIndex, value) => {
    const newData = [...data];
    newData[rowIndex][colIndex] = value;
    setData(newData);
  };
  const handleCellClick = (rowIndex, colIndex) => {
    setSelectedCell({ rowIndex, colIndex });
  };

  const handleDoubleClick = (rowIndex, colIndex) => {
    setSelectedCellForInput({ rowIndex, colIndex })
  };

  return (
    <div>
      <table>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td
                  key={colIndex}
                  onClick={() => handleCellClick(rowIndex, colIndex)}
                  // onDoubleClick={() => handleDoubleClick(rowIndex, colIndex)}
                  style={{
                    backgroundColor: selectedCell && selectedCell.rowIndex === rowIndex && selectedCell.colIndex === colIndex ? 'yellow' : 'transparent',
                  }}
                >
                  {selectedCellForInput && selectedCellForInput.rowIndex === rowIndex && selectedCellForInput.colIndex === colIndex ? (
                    <input
                      type="text"
                      value={cell}
                      onChange={(e) => handleCellChange(rowIndex, colIndex, e.target.value)}
                    />
                  ) : (
                    cell
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ExcelApp;