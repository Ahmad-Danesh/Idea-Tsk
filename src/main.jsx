// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import { BrowserRouter, Route, Routes } from "react-router";
// import { createBrowserRouter } from "react-router-dom";
// import Home from "./Home.jsx";
// import Contact from "./Contact.jsx";
// import Navigation from "./Navigation.jsx";
// createRoot(document.getElementById("root")).render(
//     <StrictMode>
//         <BrowserRouter>
//         <Navigation />
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="contact" element={<Contact />} />
//             </Routes>
//         </BrowserRouter>
//     </StrictMode>);
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navigation from "./Navigation.jsx";
import Home from "./Home.jsx";
import Contact from "./Contact.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <Navigation />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
);