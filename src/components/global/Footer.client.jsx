import { Link } from 'react-router-dom'
import { Disclosure } from "@headlessui/react";
import { RiFacebookBoxFill, RiTwitterFill, RiBehanceFill, RiPinterestFill } from "react-icons/ri";
import clsx from "clsx";
import expertise from '../../assets/expertise.png';
import stars from '../../assets/5-starts.svg';
import trustpilot from '../../assets/trustpilot-half.svg';

export default function Footer() {
    const styles = {
        section: "grid gap-4",
        nav: "grid gap-2 pb-6",
    };

    const submitHandle = (e) => {
        e.preventDefault();
    }

    function desktopIcons() {
        return (
            <>
                <a href=" https://www.facebook.com/pages/Webinopoly/435847599833649?skip_nax_wizard=true"
                    target='blank' className="font-semibold uppercase text-sm"
                >
                    <RiFacebookBoxFill size={25} />
                </a>
                <a href=" https://twitter.com/Webinopoly" target='blank'
                    className="font-semibold uppercase text-sm"
                >
                    <RiTwitterFill size={25} />
                </a>
                <a href=" https://www.behance.net/webinopoly" target='blank'
                    className="font-semibold uppercase text-sm"
                >
                    <RiBehanceFill size={25} />
                </a>
                <a href=" https://pinterest.com/webinopoly" target='blank'
                    className="font-semibold uppercase text-sm"
                >
                    <RiPinterestFill size={25} />
                </a>
            </>
        );
    }

    function mobileIcons() {
        return (
            <>
                <a href=" https://www.facebook.com/pages/Webinopoly/435847599833649?skip_nax_wizard=true"
                    target='blank' className="font-semibold uppercase text-sm"
                >
                    <RiFacebookBoxFill size={20} />
                </a>
                <a href=" https://twitter.com/Webinopoly" target='blank'
                    className="font-semibold uppercase text-sm"
                >
                    <RiTwitterFill size={20} />
                </a>
                <a href="https://www.behance.net/webinopoly " target='blank'
                    className="font-semibold uppercase text-sm"
                >
                    <RiBehanceFill size={20} />
                </a>
                <a href=" https://pinterest.com/webinopoly" target='blank'
                    className="font-semibold uppercase text-sm"
                >
                    <RiPinterestFill size={20} />
                </a>
            </>
        );
    }

    return (
        <>
            <footer
                role="contentinfo"
                className="bg-dark-blue min-h-[25rem] text-white mt-16">

                <section className={`grid  items-start grid-flow-row w-full gap-6 py-8 justify-center
        px-6 md:px-8 lg:px-18 xl:px-28 2xl:px-44 md:gap-4 lg:gap-6 grid-cols-1 md:grid-cols-4 lg:grid-cols-4 
        overflow-hidden`}>

                    <section className={styles.section}>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="text-left md:cursor-default ">
                                        <div
                                            className="flex justify-between uppercase font-bold text-base"
                                            size="lead"
                                            as="h3"
                                        >
                                            Informtion
                                            <span className="md:hidden">
                                                <IconCaret direction={open ? "up" : "down"} />
                                            </span>
                                        </div>
                                    </Disclosure.Button>

                                    <div
                                        className={`${open ? `max-h-48 h-fit` : `max-h-0 md:max-h-fit`
                                            } overflow-hidden transition-all duration-300 capitalize 
                                            text-white opacity-90 footer-menu `}
                                    >
                                        <Disclosure.Panel static>
                                            <nav className={styles.nav}>
                                                <a href="https://webinopoly.com/pages/about-us ">
                                                    About us
                                                </a>
                                                <a href=" https://webinopoly.com/pages/web-design">
                                                    services
                                                </a>
                                                <a href="https://webinopoly.com/blogs/news ">
                                                    blog
                                                </a>
                                                <a href=" https://webinopoly.com/pages/contact">
                                                    contact us
                                                </a>
                                                <a href=" https://webinopoly.com/pages/how-it-works">
                                                    how it works
                                                </a>
                                                <a href=" https://webinopoly.com/pages/reviews">
                                                    reviews
                                                </a>
                                                <a href=" https://webinopoly.com/pages/meet-the-team">
                                                    Meet The Team
                                                </a>
                                                <a href=" https://webinopoly.com/pages/refund-policy">
                                                    Refund Policy
                                                </a>
                                                <a href=" https://webinopoly.com/pages/privacy-policy">
                                                    Privacy Policy
                                                </a>
                                                <a href=" https://webinopoly.com/pages/complaints">
                                                    Complaints
                                                </a>
                                                <a href="https://webinopoly.com/pages/faq ">
                                                    faq
                                                </a>
                                            </nav>
                                        </Disclosure.Panel>
                                    </div>
                                </>
                            )}
                        </Disclosure>
                    </section>

                    <section className={styles.section}>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="text-left md:cursor-default ">
                                        <div
                                            className="flex justify-between uppercase font-bold text-base"
                                            size="lead"
                                            as="h3"
                                        >
                                            Services
                                            <span className="md:hidden">
                                                <IconCaret direction={open ? "up" : "down"} />
                                            </span>
                                        </div>
                                    </Disclosure.Button>

                                    <div
                                        className={`${open ? `max-h-48 h-fit` : `max-h-0 md:max-h-fit`
                                            } overflow-hidden transition-all duration-300 capitalize 
                                            text-white opacity-90 footer-menu  `}
                                    >
                                        <Disclosure.Panel static>
                                            <nav className={styles.nav}>
                                                <a href="https://webinopoly.com/pages/shopify-experts ">
                                                    shopify experts
                                                </a>
                                                <a href=" https://webinopoly.com/pages/shopify-plus-experts">
                                                    Shopify Plus Experts
                                                </a>
                                                <a href=" https://webinopoly.com/pages/figma-to-shopify">
                                                    Figma To Shopify
                                                </a>
                                                <a href=" https://webinopoly.com/pages/shop2_0">
                                                    shop 2.0 migration
                                                </a>
                                                <a href="https://webinopoly.com/pages/shopify-experts ">
                                                    Shopify Development
                                                </a>
                                                <a href="https://webinopoly.com/pages/shopify-plus-developers ">
                                                    Shopify Plus Developers
                                                </a>
                                                <a href=" https://webinopoly.com/pages/web-design">
                                                    Web Design
                                                </a>
                                                <a href="https://webinopoly.com/pages/shopify-developers">
                                                    Hire Shopify Developers
                                                </a>
                                                <a href="https://webinopoly.com/pages/certified-shopify-agency ">
                                                    Certified Shopify Agency
                                                </a>
                                                <a href=" https://webinopoly.com/pages/shopify-apps">
                                                    Shopify Apps
                                                </a>
                                                <a href="https://webinopoly.com/pages/shopify-speed-audit ">
                                                    Shopify Speed Boost
                                                </a>
                                                <a href="https://webinopoly.com/pages/bigcommerce-experts ">
                                                    Bigcommerce Solutions
                                                </a>
                                            </nav>
                                        </Disclosure.Panel>
                                    </div>
                                </>
                            )}
                        </Disclosure>
                    </section>

                    <section className={styles.section}>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="text-left md:cursor-default ">
                                        <div
                                            className="flex justify-between uppercase font-bold text-base"
                                            size="lead"
                                            as="h3"
                                        >
                                            Contact
                                            <span className="md:hidden">
                                                <IconCaret direction={open ? "up" : "down"} />
                                            </span>
                                        </div>
                                    </Disclosure.Button>

                                    <div
                                        className={`${open ? `max-h-48 h-fit` : `max-h-0 md:max-h-fit`
                                            } overflow-hidden transition-all duration-300 capitalize footer-contact
                                            text-white opacity-90  `}
                                    >
                                        <Disclosure.Panel static>
                                            <nav className={styles.nav}>
                                                <p>
                                                    webpinopoly Inc.
                                                </p>
                                                <p>
                                                    6464 Savoy dr.
                                                </p>
                                                <p>
                                                    Suite 720
                                                </p>
                                                <p>
                                                    Houston, TX 77036
                                                </p>
                                                <p>
                                                    United States of America
                                                </p>
                                                <br />

                                                <a href="tel:800-650-9892" >
                                                    Toll: 800-650-9892</a>
                                                <a href="tel:713-805-5888" >
                                                    Tel: 713-805-5888</a>
                                                <a href="mailto:hello@webinopoly.com" >
                                                    hello@webinopoly.com</a>
                                            </nav>
                                        </Disclosure.Panel>
                                    </div>
                                </>
                            )}
                        </Disclosure>
                    </section>

                    <section className="footer-form">
                        <h2 className="uppercase font-bold">Newsletter</h2>
                        <p className="capitalize text-white l mt-3 leading-relaxed tracking-wider opacity-90">
                            Sign up to get exclusive offers from our favorite products and to be kept
                            up-to-date on the latest news.
                        </p>
                        <form
                            className="contactUs-from mb-5 mt-4 relative"
                            method="post"
                            action="/contact#ContactFooter"
                            id='ContactFooter'
                            onSubmit={submitHandle}
                        >
                            <input type="hidden" name="form_type" value="customer" aria-hidden="true"
                                data-acsb-hidden="true" tabIndex="-1" data-acsb-now-navigable="false">
                            </input>
                            <input type="hidden" name="utf8" value="✓"
                                aria-hidden="true" data-acsb-hidden="true" tabIndex="-1" data-acsb-now-navigable="false">
                            </input>
                            <input type="hidden" name="contact[tags]" value="newsletter" aria-hidden="true"
                                data-acsb-hidden="true" tabIndex="-1" data-acsb-now-navigable="false">
                            </input>

                            <input type="email"
                                className='mr-4 text-white placeholder-white placeholder-opacity-90 
                                 bg-blue rounded-3xl border
                                py-1.5 h-11 md:h-10 lg:h-11 w-full outline-none'
                                name="contact[email]"
                                placeholder="Enter your email"
                                required
                            />
                            <button className='absolute top-0 bottom-0 right-0 text-white bg-pink 
                            rounded-r-3xl border-r border-t border-b '
                            id="submitForm">
                                Subscribe
                            </button>
                        </form>
                    </section>


                </section>

                <section className=' text-sm pb-4 px-8 md:px-28 xl:px-28 2xl:px-44'>

                    <hr className=" mb-4 w-full opacity-50" />
                    <div >
                        &copy; &nbsp;
                        <Link to="/" className="text-xs sm:text-sm opacity-85">
                            {new Date().getFullYear()} Webinopoly. All rights reserved
                        </Link>
                    </div>

                    <section className="sm:hidden flex justify-center mt-5 mb-2 gap-3">
                        {mobileIcons()}
                    </section>
                    <div className="px-8 flex justify-between items-center footer-bottom">
                        <section className="hidden sm:flex gap-1 md:gap-2 lg:gap-4">
                            {desktopIcons()}
                        </section>

                        <section>
                            <a href="https://www.expertise.com/tx/houston/web-design">
                                <img src={expertise} alt="brand-logo" />
                            </a>
                        </section>

                        <section>
                            <a href="https://www.trustpilot.com/review/webinopoly.com">
                                <img src={stars} alt="brand-logo" />
                                <img src={trustpilot} alt="brand-logo" />
                            </a>
                        </section>
                    </div>
                </section>


            </footer>
        </>
    )
}

function Icon({
    children,
    className,
    fill = "currentColor",
    stroke,
    ...props
}) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            {...props}
            fill={fill}
            stroke={stroke}
            className={clsx("w-5 h-5", className)}
        >
            {children}
        </svg>
    );
}

function IconCaret({ direction = "down", stroke = "currentColor", ...props }) {
    let rotate;

    switch (direction) {
        case "down":
            rotate = "rotate-0";
            break;
        case "up":
            rotate = "rotate-180";
            break;
        case "left":
            rotate = "-rotate-90";
            break;
        case "right":
            rotate = "rotate-90";
            break;
        default:
            rotate = "rotate-0";
    }

    return (
        <Icon
            {...props}
            className={`w-5 h-5 transition ${rotate}`}
            fill="transparent"
            stroke={stroke}
        >
            <title>Caret</title>
            <path d="M14 8L10 12L6 8" strokeWidth="1.25" />
        </Icon>
    );
}

