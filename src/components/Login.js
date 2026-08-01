import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    // State to manage email and password
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    let navigate = useNavigate();

    // Function to handle login form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevents page reload
        
        // API Call to login
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        
        const json = await response.json()
        console.log(json);

        if (json.authtoken) {
            // Save the auth token and redirect to home
            localStorage.setItem('token', json.authtoken);
            navigate("/");
            alert("Logged in Successfully");
        } else {
            alert("Invalid Credentials");
        }
    }

    // Function to handle input changes
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div className='auth-container'>
            <div className='premium-card p-4'>
                <h2 className='mb-4 text-center'>Login to iNotebook</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label fw-bold">Email address</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            value={credentials.email} 
                            onChange={onChange} 
                            id="email" 
                            name="email" 
                            aria-describedby="emailHelp" 
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="form-label fw-bold">Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            value={credentials.password} 
                            onChange={onChange} 
                            id="password" 
                            name="password" 
                            placeholder="Enter your password"
                        />
                    </div>
                    <button type="submit" className="btn-gradient px-4 py-2 w-100">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login