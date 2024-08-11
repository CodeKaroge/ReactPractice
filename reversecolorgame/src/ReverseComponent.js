import React, { useRef } from 'react'

function ReverseComponent() {

    const divRef = useRef([]);

    const randomGenrateColor = () => {
        const randomColor = () => Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
        return `#${randomColor()}${randomColor()}${randomColor()}`;
    }

    const handleChangeColor = (index) => {
        divRef.current.forEach((item, i) => {
            i !== index && (item.style.backgroundColor = randomGenrateColor())
        })
        // divRef.current[index].style.backgroundColor = randomGenrateColor()
    }

    return (
        <div>
            <h1>Change Color Game</h1>
            <div className='mainContainer'>
                {[0, 1, 2, 3, 4, 5,6,7,8,9].map(item => {
                    return [0, 1, 2, 3, 4, 5,6,7,8,9].map(innerItem => {
                        if (item >= innerItem) {
                            const uniqueIndex = item * 6 + innerItem;
                            return (
                                <div
                                    ref={(e) => divRef.current[uniqueIndex] = e}
                                    className='inner-box'
                                    onClick={() => handleChangeColor(uniqueIndex)}
                                    style={{ backgroundColor: randomGenrateColor() }}></div>)
                        } else {
                            return <div></div>
                        }
                    }
                    )
                }
                )}
            </div>
        </div>
    )
}

export default ReverseComponent
