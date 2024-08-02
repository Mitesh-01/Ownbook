import React from 'react'

function Cards({ item }) {
    if (!item) {
        console.error("Item is undefined");  // Log error if item is undefined
        return "";
    }

    return (
        <div>
            <div className="card my-3 border-0">
                <img src={item.image} className="card-img-top" alt="Ownbook" />
                <div className="card-body">
                <span className="badge rounded-pill text-bg-success">{item.category}</span>
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.title}</p>
                    <div className='d-flex justify-content-between'>
                    <a href="#" className="btn btn-outline-success rounded-5">₹{item.price}</a>
                    <a href="#" className="btn btn-outline-success rounded-5">Buy</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;


