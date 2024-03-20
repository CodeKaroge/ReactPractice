import React, { useEffect, useState } from 'react';
const Form = () => {
    const [userInput, setUserInput] = useState({
        name: "",
        userName: "",
        age: "",
        email: "",
        password: ""
    })
    const [showPassword, setShowPassword] = useState(false)
    const [disableButton, setDisableButton] = useState(true)
    const [erroMessage, setErrorMessage] = useState({
        email: "",
        password: ''
    })
    const handleChange = (e) => {
        setUserInput({
            ...userInput, [e.target.name]: e.target.value
        })
        validateValue(e.target.name, e.target.value)
    }
    const validateValue = (fieldName, value) => {
        let errorMessage = ''
        switch (fieldName) {
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                errorMessage = emailRegex.test(value) ? "" : "Invalid Email format"
                break;
            case 'password':
                const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
                errorMessage = passwordRegex.test(value) ? "" : "Password is not in proper format"
                break
            default:
                break
        }
        setErrorMessage({
            ...erroMessage,
            [fieldName]: errorMessage
        })
    }

    const resetForm = () => {
        setUserInput({
            name: "",
            userName: "",
            age: "",
            email: "",
            password: ""
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        let response = false
        if (response) {
            resetForm()
        } else { alert("There is some issue") }
    }
    useEffect(() => {
        const isEmailValid = erroMessage.email === '' && erroMessage.password === ''
        const isAnyFieldEmpty = Object.values(userInput).some(item => item === '')
        setDisableButton(!isEmailValid || isAnyFieldEmpty);
    }, [userInput, erroMessage])


    return (
        <div>
            <form onSubmit={handleSubmit} style={{
                display: "block",
                width: "150px",
                margin: "auto"
            }}>
                <label >Name</label>
                <input onChange={handleChange} type="text" name='name' value={userInput.name} />
                <label >UserName</label>
                <input onChange={handleChange} type="text" name='userName' value={userInput.userName} />
                <label >Age</label>
                <input onChange={handleChange} type="number" name='age' value={userInput.age} />
                <label >Email</label>
                <input onChange={handleChange} type="email" name='email' value={userInput.email} />
                <span style={{ color: 'red' }}>{erroMessage.email}</span>
                <br />
                <label >Password</label>
                <input onChange={handleChange} type={showPassword ? "text" : "password"} name='password' value={userInput.password} />
                <span style={{ color: 'red' }}>{erroMessage.password}</span>
                <span style={{ cursor: "pointer" }} onClick={() => setShowPassword(!showPassword)}>👀 </span>
                <input type="submit" disabled={disableButton} />
            </form>
        </div>
    )
}
export default Form