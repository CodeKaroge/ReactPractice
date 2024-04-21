import React, { useState } from 'react'

function TaskList() {
    const [task, setTask] = useState('')
    const [taskList, setTaskList] = useState([])
    const [editMode, setEditMode] = useState(-1)

    const handleCreateTaskList = () => {
        setTaskList([...taskList, task])
        setTask('')
    }
    const handleDelete = (index) => {
        const newList = taskList.filter((_, i) => index !== i)
        setTaskList(newList)
    }

    const handleEdit = (index, e) => {
        const updatedTask = [...taskList]
        updatedTask[index] = e.target.value
        setTaskList(updatedTask)
    }

    const handleClearAll = () => {
        setTaskList([])
    }
    return (
        <>
            <h1>TaskList</h1>
            <input
                type="text"
                placeholder='Enter Your Tasks Here ....'
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button style={{ marginLeft: "10px" }} onClick={handleCreateTaskList}>Create Task</button>
            <button style={{ marginLeft: "10px" }} onClick={handleClearAll}>Clear All</button>
            <ul>
                {taskList.map((item, index) => {
                    return (
                        <li style={{
                            display: 'flex',
                            justifyContent: 'space-around',
                            margin: '10px'
                        }}>
                            {editMode === index ?
                                <input
                                    type='text'
                                    value={item}
                                    onChange={(e) => handleEdit(index, e)}
                                />
                                :
                                < p > {item}</p>}
                            <button onClick={() => handleDelete(index)}>Delete Task</button>
                            <button
                                onClick={() => editMode === index ?
                                    setEditMode(-1) :
                                    setEditMode(index)}
                            >
                                {editMode === index ? 'Save' : 'Edit Taks'}
                            </button>
                        </li>
                    )
                })}
            </ul >
        </>

    )
}

export default TaskList