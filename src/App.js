import { Suspense } from "react";
import { Layout } from "./components/global/Layout.server";
import Hero from "./components/sections/Hero.client";

function App() {
  
  return (
    <Layout>
      <Suspense >
        <div className="app">
          <Hero />
        </div>
      </Suspense>
    </Layout>
  );
}

export default App;
