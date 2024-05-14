import React, { useState } from 'react'

function DynamicComponent({ fields }) {
    const [formData, setFormData] = useState({})
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(formData);
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                {fields.map((item, index) => (
                    <div key={index}>
                        <label>{item.label}</label>
                        {item.type === 'text' &&
                            <input
                                type='text'
                                name={item.name}
                                value={formData[item.name] || ''}
                                onChange={handleChange}
                            />
                        }
                        {item.type === 'textarea' &&
                            <textarea
                                name={item.name}
                                value={formData[item.name] || ''}
                                onChange={handleChange}
                            />}
                        {item.type === 'number' &&
                            <input type='number'
                                name={item.name}
                                value={formData[item.name] || ''}
                                onChange={handleChange}
                            />}
                        <br />
                    </div>
                ))}
            </div>
            <button type='submit'>Submit</button>
        </form >
    )
}

export default DynamicComponent
