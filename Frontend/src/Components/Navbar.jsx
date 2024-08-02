import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Login from './Login';

function Navbar() {

    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    // For Update Bg Color When Scroll
    // [] Empty thi varmvar call na thai te mate
    const [sticky, setSticky] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <div>
            <nav className={`navbar navbar-expand-lg px-5 bg-light fixed-top ${sticky ? "shadow" : ""}`}>
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold me-3" href="#">OwnBook</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/course">Course</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <div>
                            <button className="btn btn-dark ms-3 me-2" onClick={handleShow}>Login</button>
                            {showModal && <Login handleClose={handleClose} />}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
