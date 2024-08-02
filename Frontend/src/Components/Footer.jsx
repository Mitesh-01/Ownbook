import React from 'react'

function Footer() {
    return (
        <div>
            <footer className="bg-body-tertiary text-center">
                {/* Grid container */}
                <div className="container p-4 pb-0">
                    {/* Section: Social media */}
                    <section className="mb-4">
                        {/* Facebook */}
                        <a data-mdb-ripple-init className="btn text-white btn-floating m-1" style={{ "backgroundColor": "#3b5998" }} href="#!" role="button"><i className="fab fa-facebook-f" /></a>
                        {/* Twitter */}
                        <a data-mdb-ripple-init className="btn text-white btn-floating m-1" style={{ "backgroundColor": "#55acee" }} href="#!" role="button"><i className="fab fa-twitter" /></a>
                        {/* Instagram */}
                        <a data-mdb-ripple-init className="btn text-white btn-floating m-1" style={{ "backgroundColor": "#ac2bac" }} href="#!" role="button"><i className="fab fa-instagram" /></a>
                        {/* Github */}
                        <a data-mdb-ripple-init className="btn text-white btn-floating m-1" style={{ "backgrounColor": "#333333" }} href="#!" role="button"><i className="fab fa-github" /></a>
                    </section>
                    {/* Section: Social media */}
                </div>
                {/* Grid container */}
                {/* Copyright */}
                <div className="text-center pb-2">
                Copyright © 2024
                    <a className="text-body text-decoration-none text-success" href="#"> <span className='text-success'>
                    ownbook.com</span></a>
                </div>
                {/* Copyright */}
            </footer>
        </div>
    )
}

export default Footer
