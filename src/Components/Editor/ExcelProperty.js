import React, { useState } from 'react'

function ExcelProperty() {
    const [data, setData] = useState([
        ["A1", "B1", "C1"],
        ["A2", "B2", "C2"],
        ["A3", "B3", "C3"],
    ])

    return (
        <div>
            <table>
                <tbody>
                    {data.map(item => (
                        <tr>
                            {item.map(innerItem => (
                                <td><input type="text" value={innerItem} /></td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ExcelProperty