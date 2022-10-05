import brand1 from '../../assets/brand logos/brand1.png'
import brand2 from '../../assets/brand logos/brand2.png'
import brand3 from '../../assets/brand logos/brand3.png'
import brand4 from '../../assets/brand logos/brand4.png'
import brand5 from '../../assets/brand logos/brand5.png'
import brand6 from '../../assets/brand logos/brand6.png'
import brand7 from '../../assets/brand logos/brand7.png'
import brand8 from '../../assets/brand logos/brand8.png'
import Slider from "react-slick";

function BrandsSlider() {
    const settings = {
        infinite: true,
        dots: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <section className="flex flex-col justify-center -mt-7 sm:-mt-6 md:mt-6 
          px-16 md:px-24 lg:px-32 xl:px-44 2xl:px-64 mini-slider xs-slider ">
                <h2 className="uppercase tracking-wider sm:text-base font-semibold font-MontSerif text-light-black text-center">
                    we worked these top brands
                </h2>

                <div className="mt-2 sm:mt-4  pb-5 w-full justify-center mx-auto">
                    <Slider {...settings}>
                        <li >
                            <div className="slider-img-div">
                                <a href="http://hum.colgate.com/" target='blank'>
                                    <img src={brand7} alt="brand logo" />
                                </a>
                            </div>
                        </li>
                        <li >
                            <div className="slider-img-div">
                                <a href="https://maradji.com/" target='blank'>
                                    <img src={brand8} alt="brand logo" />
                                </a>
                            </div>
                        </li>
                        <li >
                            <div className="slider-img-div">
                                <a href="https://dtlr.com/" target='blank'>
                                    <img src={brand6} alt="brand logo" />
                                </a>
                            </div>
                        </li>
                        <li >
                            <div className="slider-img-div">
                                <a href="https://www.persil.com/uk/home.html" target='blank'>
                                    <img src={brand1} alt="brand logo" />
                                </a>
                            </div>
                        </li>
                        <li >
                            <div className="slider-img-div">
                                <a href="https://www.deere.com/en/index.html" target='blank'>
                                    <img src={brand2} alt="brand logo" />
                                </a>
                            </div>
                        </li>
                        <li >
                            <div className="slider-img-div">
                                <a href="https://www.gmcompanystore.com/" target='blank'>
                                    <img src={brand3} alt="brand logo" />
                                </a>
                            </div>
                        </li>
                        <li >
                            <div className="slider-img-div">
                                <a href="https://facerealityskincare.com/" target='blank'>
                                    <img src={brand4} alt="brand logo" />
                                </a>
                            </div>
                        </li>
                        <li >
                            <div className="slider-img-div">
                                <a href="http://bodyhealth.com/" target='blank'>
                                    <img src={brand5} alt="brand logo" />
                                </a>
                            </div>
                        </li>

                        
                    </Slider>
                    <hr className='h-1 max-w-4xl justify-center mx-auto text-slate mt-1 md:mt-3'/>
                </div>
            </section>
        </>
    );
}

export default BrandsSlider