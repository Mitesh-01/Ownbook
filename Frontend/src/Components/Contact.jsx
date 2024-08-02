import React from 'react'
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom';

function Contact() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <div className='container-fluid'>
            <div className="row mt-5">
                <div className="col-xxl-4 offset-xxl-4 col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1 ">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="card mt-5 card-hover shadow">
                            <div className="card-header text-bg-success d-flex justify-content-between">
                                <h3 className='fw-bold mt-2'>Contact Us</h3>
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
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea className="form-control shadow-none" id="message" rows="3" placeholder='Enter Your Message' {...register("message", { required: true })}>
                                    </textarea>
                                    {errors.message && <span className='text-danger'>This field is required</span>}
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <button type='submit' className='btn btn-success'>Send</button>
                                    <button type='reset' className='btn btn-danger'>Clear</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
