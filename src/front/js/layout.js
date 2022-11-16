import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import DetailCardPlanet from "./component/DetailCardPlanet";
import DetailCardSpecies from "/workspace/star-wars-blog-FLUX/src/front/js/component/DetailCardSpecies.js"

import DetailCardCharacter from "./component/DetailCardCharacter";

const Layout = () => {
    const basename = process.env.BASENAME || "";
 
    return (
        <div>
            <BrowserRouter basename={basename}>
                    <Navbar />
                    <Routes>
                       <Route element={<Home />} path="/" /> 
                        <Route path="/detail-card-character/:index" element={<DetailCardCharacter/>}/>
                        <Route path="/detail-card-planets/:index" element={<DetailCardPlanet/>}/>
                        <Route path="/detail-card-species/:index" element={<DetailCardSpecies/>}/>
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />   
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
