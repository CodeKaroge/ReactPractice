import { useState } from "react";
import "./Accordion.css";

const Accordion = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="accordion">
            {items.map((item, index) => (
                <div key={index} className="accordion-item">
                    <div
                        className="accordion-title"
                        onClick={() => handleToggle(index)}
                    >
                        <h3>{item.title}</h3>
                        <span>{openIndex === index ? "−" : "+"}</span>
                    </div>
                    {openIndex === index && (
                        <div className="accordion-content">
                            <p>{item.content}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Accordion;
