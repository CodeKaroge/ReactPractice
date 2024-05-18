import React, { useState } from 'react'

function Accordion() {
    const [openIndex, setOpenIndex] = useState(0)
    const data = [
        {
            question: "How many bones does a cat have?",
            answer: "A cat has 230 bones - 6 more than a human",
        },
        {
            question: "How much do cats sleep?",
            answer: "The average cat sleeps 12-16 hours per day",
        },
        {
            question: "How long do cats live",
            answer: "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
        },
    ]

    const handleOpenIndex = (index) => {
        setOpenIndex((prev) => index === prev ? -1 : index)
    }
    return (
        <div style={{ width: "600px" }}>
            <h1>Accordion</h1>
            {data.map((item, index) => (
                <div key={index}
                    style={{
                        textAlign: 'start',
                        border: '1px solid black',
                        borderRadius: "10px",
                        marginTop: "5px",
                        background : openIndex === index ? 'orange': '',
                        padding: '10px'
                    }}
                >
                    <span onClick={() => handleOpenIndex(index)}> {openIndex === index ? "⬇️" : "⬆️" } </span>
                    <h1 style={{ display: "inline" }} >{item.question}</h1>
                    {openIndex === index && <p style={{ marginLeft: "30px" }}>{item.answer}</p>}
                </div>
            ))}
        </div>
    )
}

export default Accordion
