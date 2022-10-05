import { Suspense } from "react";

import Header from './Header.client'
import Footer from './Footer.client'

export function Layout({ children }) {

    return (
        <>
            <div className="layout-main">
                <div className="flex flex-col min-h-screen antialiased bg-neutral-50 ">
                    <div className="">
                        <a href="#mainContent" className="sr-only">
                            Skip to content
                        </a>
                    </div>
                    <Suspense>
                        <Header />
                    </Suspense>
                    <main role="main" id="mainContent" className="flex-grow">
                        {children}
                    </main>
                </div>
                <Suspense>
                    <Footer />
                </Suspense>
            </div>
        </>
    );
}