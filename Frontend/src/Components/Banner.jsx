import React from 'react'

function Banner() {
    return <>
        <div className="px-5">
            <div className="row align-items-center hero-section">
                <div className="col-md-6 order-md-2 order-1">
                    <img src="src/Images/Book.jpg" className="img-fluid Banner-img mb-4 mb-md-0 w-75 offset-2" alt="Hero Image" />
                </div>
                <div className="col-md-6 order-md-1 text-center text-md-start order-2">
                    <h1 className="display-5 fw-bold">
                        Hello, Welcomes here to learn something
                        <span className="d-inline-block d-md-inline" style={{ color: 'green' }}>new everyday!!!</span>
                    </h1>
                    <p className="lead mt-4 fs-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe in deleniti dignissimos magnam sunt quo quas! Autem, repellendus placeat! Nulla iure temporibus quos. Tempore quae illum aperiam odit blanditiis enim.
                    </p>
                    <a href="#" className="btn btn-success btn-md">Learn more</a>
                </div>
            </div>
        </div>

    </>
}

export default Banner
