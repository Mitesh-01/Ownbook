import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"

function Login({ handleClose }) {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit = (data) => console.log(data);
      
    return (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-fullscreen-sm-down">
                <div className="modal-content">
                    <div className="modal-header text-bg-success">
                        <h5 className="modal-title fw-bold">Login</h5>
                        <Link to='/' type="button" className="btn-close" onClick={handleClose}></Link>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
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
                                    <button className='btn btn-success' type='submit'>Login</button>
                                    <button className='btn btn-danger' type='reset'>Clear</button>
                                </div>
                                <div className='mt-5'>
                                    <p>Not Registered??</p>
                                    <Link to='/signup' type='button' className='btn w-100 btn-outline-success'>Signup</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
