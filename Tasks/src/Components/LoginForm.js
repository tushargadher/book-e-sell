import React, { useState } from "react";
import '../css/form.css';
const LoginForm = () => {

    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
    })

    const handleOnChange = (e) => {
        //insted of doing indivisul we use this method to change the value 
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handleSubmit = () => {
        alert(`username:${data.name}       
        email:${data.email} 
        password:${data.password}`);
    }
    return (
        <>
            <div className="form">
                <h1>Registation Form</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Enter Username" onChange={handleOnChange} value={data.name} />
                    <input type="email" name="email" placeholder="Enter Email" onChange={handleOnChange} value={data.email} />
                    <input type="password" name="password" placeholder="Enter Password" onChange={handleOnChange} value={data.password} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </>
    );
}
export default LoginForm;