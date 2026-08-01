import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password } = credentials;
        
        if(password !== credentials.cpassword){
            alert("Passwords do not match");
            return;
        }

        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        });
        const json = await response.json()
        console.log(json);
        if (json.authtoken) {
            localStorage.setItem('token', json.authtoken);
            navigate("/");
            alert("Account Created Successfully");
        } else {
            alert("Invalid Details");
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div className='auth-container'>
            <div className='premium-card p-4'>
                <h2 className='mb-4 text-center'>Create an Account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label fw-bold">Name</label>
                        <input type="text" className="form-control" id="name" name="name" value={credentials.name} onChange={onChange} aria-describedby="emailHelp" minLength={3} required placeholder="Enter your name"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label fw-bold">Email address</label>
                        <input type="email" className="form-control" id="email" name="email" value={credentials.email} onChange={onChange} aria-describedby="emailHelp" required placeholder="Enter your email"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label fw-bold">Password</label>
                        <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={onChange} minLength={5} required placeholder="Create a password"/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="cpassword" className="form-label fw-bold">Confirm Password</label>
                        <input type="password" className="form-control" id="cpassword" name="cpassword" value={credentials.cpassword} onChange={onChange} minLength={5} required placeholder="Confirm your password"/>
                    </div>
                    <button type="submit" className="btn-gradient px-4 py-2 w-100">Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default Signup;