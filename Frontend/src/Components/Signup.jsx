import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Login from './Login';
import { useForm } from "react-hook-form"

import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS import
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JavaScript import

function Signup() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    return (
        <div className='signupbg'>
            <div className="row">
                <div className="col-xxl-4 offset-xxl-4 col-md-6 offset-md-3 col-10 offset-1">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="card mt-3 card-hover">
                            <div className="card-header text-bg-success d-flex justify-content-between">
                                <h3 className='fw-bold'>Signup</h3>
                                <Link to='/' title='Back'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="mt-2 text-light bi bi-arrow-right-short" style={{ cursor: 'pointer' }} viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                                    </svg>
                                </Link>
                            </div>
                            <div className="card-body">
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control shadow-none" id="name" placeholder="Enter Your Name" {...register("name", { required: true })} />
                                    {errors.name && <span className='text-danger'>This field is required</span>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control shadow-none" id="email" placeholder="Enter Your Email" {...register("email", { required: true })} />
                                    {errors.email && <span className='text-danger'>This field is required</span>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type='password' className="form-control shadow-none" id="password" placeholder='Enter Your Password' {...register("password", { required: true })} />
                                    {errors.password && <span className='text-danger'>This field is required</span>}
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <button className='btn btn-success' type='submit'>Signup</button>
                                    <button className='btn btn-danger' type='reset'>Clear</button>
                                </div>
                                <div className='mt-5'>
                                    <p>Have Account ??</p>
                                    <button type='button' className='btn w-100 btn-outline-success' onClick={handleShow}>Login</button>
                                    {showModal && <Login handleClose={handleClose} />}
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup
