import React from 'react'
import list from '../../public/list.json'
import Cards from './Cards'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

function Course() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 4,
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
        <div className='px-5 course'>
            <div className=''>
                <h1 className='text-center display-5'>We're delighted to have you <span className='text-success'>Here!</span></h1>
                <p className='lead text-center fs-6 mt-4'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores quasi totam qui vitae accusantium, cumque molestiae quibusdam architecto. Itaque voluptate delectus laborum placeat autem consequatur, cum animi debitis sapiente obcaecati?
                </p>
                <div className='d-flex justify-content-center mt-4'>
                    <Link to="/" className='btn btn-success'>Back</Link>
                </div>

                <div>
                <Slider {...settings}>
                        {list.map((item) => {
                            return (
                                    <div className='px-2 my-4' key={item.id}>
                                        <Cards item={item} />
                                    </div>
                            );
                        })}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Course
