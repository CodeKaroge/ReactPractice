import React, { useState } from 'react';
import { trainData } from './Data';
import './TrainTicketComponent.css'

function TrainBookingSystem() {
    const [trainOnDate, setTrainOnDate] = useState([]);
    const [currentTrain, setCurrentTrain] = useState(null);
    const handleDatechange = (e) => {
        setTrainOnDate(trainData.filter(obj => obj.date === (e.target.value).toString()));
        setCurrentTrain(null)
    }
    const handleViewSeats = (id) => {
        console.log(id);
        setCurrentTrain(trainOnDate.find((obj) => obj.trainId === id))
    }
    const handleBook = (index) => {
        let temp = currentTrain;
        temp.availableSeats = temp.availableSeats - 1;
        temp.seats[index].isBooked = true;
        setTrainOnDate([...trainOnDate.filter(obj => obj.trainId !== currentTrain.trainId), temp])
    }
    return (
        <div>
            <label>Select Date</label>
            <input type='date' onChange={handleDatechange} />
            {trainOnDate.length > 0 ? <h1>Trains available {trainOnDate[0].date}</h1> : <h1>No Train Available</h1>}
            <ol>
                {trainOnDate.map((obj, i) => {
                    return (
                        <li key={i}>
                            <h3> {obj.name} - Available Seats :- {obj.availableSeats}</h3>
                            <button onClick={() => handleViewSeats(obj.trainId)}>View Seats</button>
                        </li>
                    )
                })
                }
            </ol>
            <div className='parentBox'>
                {currentTrain !== null && currentTrain.seats.map((obj, i) => {
                    return (
                        <div onClick={() => currentTrain.availableSeats > 0 && handleBook(i)} className={`box ${obj.isBooked ? 'red' : obj.isPWD ? 'blue' : 'green'}`}></div>
                    )
                })}
            </div>
        </div>
    )
}

export default TrainBookingSystem
