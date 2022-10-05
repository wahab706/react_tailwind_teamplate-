import { Layout } from "./Layout.server";
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <Layout>
            <div className="flex text-center justify-center flex-col mt-64 ">
                <div >
                    <h1 className=" text-7xl font-semibold animated-404 text-blue" >404</h1>
                    <h2 className=" text-1xl font-semibold text-blue">Page Not Found</h2>
                    <p className=" text-sm font-normal mt-2"> We couldn’t find the page you’re looking for. Try checking the URL or
                        heading back to the home page.</p>
                </div>
                <Link to="/">
                    <button className="bg-white hover:bg-gray-100 text-blue font-semibold 
                    py-2 px-4 border border-pink rounded-3xl mt-5">
                        Take me to the home page
                    </button>
                </Link>
            </div>
        </Layout>
    )
}
