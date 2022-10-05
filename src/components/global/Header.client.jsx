import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { RiFacebookBoxFill, RiTwitterFill, RiBehanceFill, RiPinterestFill, RiArrowDropDownLine } from "react-icons/ri";
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"
import { MdArrowDropDown } from "react-icons/md"


export default function Header() {
    const [toggle, setToggle] = useState(false)

    const listenToScroll = () => {
        let desktopHeader = document.getElementById('desktopHeader');
        let mobileHeader = document.getElementById('mobileHeader');
        let scrollValue = document.body.scrollTop || document.documentElement.scrollTop;
        if (scrollValue < 200) {
            desktopHeader.classList.remove('header-sticky');
            mobileHeader.classList.remove('header-sticky');
        }
        else {
            desktopHeader.classList.add('header-sticky');
            mobileHeader.classList.add('header-sticky');
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
    }, []);

    function desktopMenu() {
        return (
            <nav className="flex">
                <ul className="flex relative desktop-navbar md:mt-3 md:-mr-12 md:gap-4 lg:gap-4 xl:gap-6">
                    <li className="md:text-xs  xl:text-sm">
                        <Link to="/" > home </Link>
                    </li>

                    <li className="md:text-xs  xl:text-sm ">

                        <span className="flex group">
                            <a href=" https://webinopoly.com/pages/web-design"
                                className="flex">
                                web services  <RiArrowDropDownLine size={20} />
                            </a>

                            <div className="absolute hidden group-hover:block rounded-b mt-5 bg-light-pink p-6 li-bg-change">
                                <ul className="flex flex-col gap-2">
                                    <li>
                                        <a href="https://webinopoly.com/pages/shopify-experts">shopify experts
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://webinopoly.com/pages/bigcommerce-experts">bigcommerece
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://webinopoly.com/pages/web-design">web design
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://webinopoly.com/pages/e-commerce">ecommerece
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://webinopoly.com/pages/mobile-apps-development">mobile apps
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://webinopoly.com/pages/animation-interactive">animation
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://webinopoly.com/pages/seo">seo
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </span>

                    </li>

                    <li className="md:text-xs  xl:text-sm">
                        <a href=" https://webinopoly.com/pages/portfolio-2020"  > portfolio </a>
                    </li>

                    <li className="md:text-xs  xl:text-sm">
                        <a href=" https://webinopoly.com/pages/case-studies"  > case studies </a>
                    </li>

                    <li className="md:text-xs  xl:text-sm">
                        <a href="https://webinopoly.com/blogs/news "  > blog </a>
                    </li>

                    <li className="md:text-xs  xl:text-sm">
                        <a href=" https://webinopoly.com/pages/contact"  > contact us  </a>
                    </li>
                </ul>
            </nav >
        );
    }

    function mobileMenu() {
        return (
            <nav className="flex w-full mt-5 ">
                <ul className="flex flex-col relative mobile-navbar w-full" onClick={() => setToggle(false)}>
                    <li className="text-sm sm:text-base">
                        <a href=" "  >
                            <span className='flex gap-1'> <MdArrowDropDown className='mobile-dropdwon-icon' size={18} />
                                home
                            </span>
                        </a>
                    </li>

                    <li className="">
                        <div className="flex flex-col gap-1">

                            <span className='flex text-sm sm:text-base'>
                                <a href="https://webinopoly.com/pages/web-design " className='flex'>
                                    <MdArrowDropDown className='mobile-dropdwon-icon' size={18} />
                                    web services  <RiArrowDropDownLine size={20} />
                                </a>
                            </span>



                            <div className="nav-sub-heading pl-6 mt-2">
                                <ul className="flex flex-col gap-1 text-sm">
                                    <li>
                                        <a href=" https://webinopoly.com/pages/shopify-experts"  >
                                            <span className='flex gap-1'> <MdArrowDropDown className='mobile-dropdwon-icon' size={16} />
                                                shopify experts
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href=" https://webinopoly.com/pages/bigcommerce-experts"  >
                                            <span className='flex gap-1'> <MdArrowDropDown className='mobile-dropdwon-icon' size={16} />
                                                bigcommerece
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://webinopoly.com/pages/web-design "  >
                                            <span className='flex gap-1'> <MdArrowDropDown className='mobile-dropdwon-icon' size={16} />
                                                web design
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href=" https://webinopoly.com/pages/e-commerce"  >
                                            <span className='flex gap-1'> <MdArrowDropDown className='mobile-dropdwon-icon' size={16} />
                                                ecommerece
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://webinopoly.com/pages/mobile-apps-development "  >
                                            <span className='flex gap-1'> <MdArrowDropDown className='mobile-dropdwon-icon' size={16} />
                                                mobile apps
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href=" https://webinopoly.com/pages/animation-interactive"  >
                                            <span className='flex gap-1'> <MdArrowDropDown className='mobile-dropdwon-icon' size={16} />
                                                animation
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href=" https://webinopoly.com/pages/seo"  >
                                            <span className='flex gap-1'> <MdArrowDropDown className='mobile-dropdwon-icon' size={16} />
                                                seo
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </li>

                    <li className="text-sm sm:text-base">
                        <a href="https://webinopoly.com/pages/portfolio-2020 "  >
                            <span className='flex gap-1'> <MdArrowDropDown className='mobile-dropdwon-icon' size={18} />
                                portfolio
                            </span>
                        </a>
                    </li>

                    <li className="text-sm sm:text-base">
                        <a href=" https://webinopoly.com/pages/case-studies"  >
                            <span className='flex gap-1'> <MdArrowDropDown className='mobile-dropdwon-icon' size={18} />
                                case studies
                            </span>
                        </a>
                    </li>

                    <li className="text-sm sm:text-base">
                        <a href=" https://webinopoly.com/blogs/news"  >
                            <span className='flex gap-1'> <MdArrowDropDown className='mobile-dropdwon-icon' size={18} />
                                blog
                            </span>
                        </a>
                    </li>

                    <li className="text-sm sm:text-base">
                        <a href=" https://webinopoly.com/pages/contact"  >
                            <span className='flex gap-1'> <MdArrowDropDown className='mobile-dropdwon-icon' size={18} />
                                contact us
                            </span>
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }

    function desktopIcons() {
        return (
            <div className="flex gap-0 header-icons" >
                <a href=" https://www.facebook.com/pages/Webinopoly/435847599833649?skip_nax_wizard=true" target='blank' >
                    <RiFacebookBoxFill size={22} />
                </a>

                <a href=" https://twitter.com/Webinopoly" target='blank' >
                    <RiTwitterFill size={22} />
                </a>

                <a href=" https://www.behance.net/webinopoly" target='blank' >
                    <RiBehanceFill size={22} />
                </a>

                <a href=" https://pinterest.com/webinopoly" target='blank'>
                    <RiPinterestFill size={22} />
                </a>
            </div>
        );
    }

    function tabletIcons() {
        return (
            <div className="flex gap-0 header-icons" >
                <a href=" https://www.facebook.com/pages/Webinopoly/435847599833649?skip_nax_wizard=true" target='blank' >
                    <RiFacebookBoxFill />
                </a>

                <a href=" https://twitter.com/Webinopoly" target='blank' >
                    <RiTwitterFill />
                </a>

                <a href="https://www.behance.net/webinopoly " target='blank'>
                    <RiBehanceFill />
                </a>

                <a href=" https://pinterest.com/webinopoly" target='blank' >
                    <RiPinterestFill />
                </a>
            </div>
        );
    }


    return (
        <>

            {/* ---------------------------Desktop header------------------ */}

            <header
                role="banner"
                id='desktopHeader'
                className="hidden md:flex flex-row justify-between items-center w-full max-header
                z-40 top-0 leading-none gap-4 antialiased transition bg-blue absolute 
                md:flex-col 
                md:py-5 md:pl-14 md:pr-36
                lg:py-8  lg:pl-12 lg:pr-28 
                xl:pl-24 xl:pr-36 
                "
            >
                <div className='forkit '>
                    <span>
                        Request a Quote
                    </span>
                </div>
                <div className='flex justify-between items-center w-full'>

                    <div className="flex gap-12 md:w-48 lg:w-44 xl:w-48">
                        <a className="font-bold" href=" " >
                            <img src={logo} alt="logo" />
                        </a>
                    </div>

                    <div className='sm:hidden lg:block'>
                        {desktopMenu()}
                    </div>

                    <div className="flex flex-col lg:-mt-7 sm:hidden md:block icons-div">
                        <div className='flex md-screen-hidden'>
                            {desktopIcons()}
                        </div>
                        <div className='md:flex lg:hidden'>
                            {tabletIcons()}
                        </div>
                        <div className='call-action'>
                            <a href="tel:713-805-5888"
                                className="text-white md:text-xs xl:text-sm font-medium">
                                CALL - (713) 805-5888
                            </a>
                        </div>

                    </div>
                </div>

                <div className='sm:hidden md:block lg:hidden'>
                    {desktopMenu()}
                </div>

            </header>




            {/* ---------------------------Mobile header------------------ */}

            <header
                role="banner"
                id='mobileHeader'
                className='md:hidden flex w-full z-40 top-0 leading-none gap-4 antialiased transition
                 bg-blue absolute py-5
                '
            >
                {toggle ? "" :
                    <div className='forkit '>
                        <span>
                            Request a Quote
                        </span>
                    </div>}
                <div>
                    <button className='mini:left-6 xs:left-14 top-8 absolute '
                        onClick={() => setToggle(true)} >
                        <FaBars size={24} color={'white'} />
                    </button>

                    {toggle &&
                        <div className='fixed top-0 left-0 bg-dark-blue w-full h-screen px-6 py-7 sm:px-10'>
                            <div className='flex justify-center'>
                                <button onClick={() => setToggle(false)}
                                    className='absolute top-0 left-0 px-6 pt-9 sm:px-14'>
                                    <ImCross size={20} color={'white'} />
                                </button>

                                <div className="flex w-40 sm:w-44">
                                    <a className="font-semibold" href=" " >
                                        <img src={logo} alt="logo" />
                                    </a>
                                </div>
                            </div>
                            {mobileMenu()}
                        </div>
                    }
                </div>

                <div className='flex justify-center items-center w-full'>
                    <a className="font-bold" href=" " >
                        <img src={logo} alt="logo" />
                    </a>
                </div>

            </header>
        </>
    )
}

