import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import { Home } from "./pages/home";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import DetailCard from "/workspace/star-wars-blog-FLUX/src/front/js/component/DetailCard.js";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
          
                    <Navbar />
                    <Routes>
                       <Route element={<Home />} path="/" /> 
                        <Route path="/detail-card" element={<DetailCard/>}   />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
               
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
