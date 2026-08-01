
import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import noteContext from "../context/notes/noteContext";

const Navbar = () => {
    let location = useLocation();
    let navigate = useNavigate();
    
    // Only fetch context if we are going to use search.
    const context = useContext(noteContext);
    const { searchQuery, setSearchQuery } = context || {};

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate("/login");
    }

    const onSearchChange = (e) => {
        if (setSearchQuery) {
            setSearchQuery(e.target.value);
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">iNotebook</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                        </li>
                    </ul>
                    
                    {localStorage.getItem('token') ? (
                        <div className="d-flex align-items-center">
                            {location.pathname === '/' && (
                                <input 
                                    className="form-control me-3" 
                                    type="search" 
                                    placeholder="Search notes..." 
                                    aria-label="Search" 
                                    value={searchQuery || ""}
                                    onChange={onSearchChange}
                                    style={{ width: "250px" }}
                                />
                            )}
                            <button onClick={handleLogout} className="btn btn-outline-light">Logout</button>
                        </div>
                    ) : (
                        <form className="d-flex">
                            <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
                            <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
                        </form>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar