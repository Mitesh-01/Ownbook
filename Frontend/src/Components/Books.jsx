import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json";
import Cards from './Cards';

function Books() {
    // Free Data Access From list.json (API)
    const filterData = list.filter((data) => data.category === "Free");
    console.log(filterData);

    var settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div>
                <div className='px-5 py-3'>
                    <h5 className='fw-bold'>Free Offered Courses</h5>
                    <p className='lead fs-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quis facilis totam! Cupiditate iusto eaque, officia culpa distinctio tempora ut, maxime nam eius odit optio, eum perspiciatis temporibus sed voluptatem?</p>
                </div>
                <div>
                <Slider {...settings} className='px-5'>
                        {filterData.map((item) => {
                            return (
                                    <div className='px-2' key={item.id}>
                                        <Cards item={item} />
                                    </div>
                            );
                        })}
                    </Slider>
                </div>
            </div>
        </>
    );
}

export default Books;
