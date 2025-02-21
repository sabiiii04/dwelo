import { useState } from 'react';
import './app.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";

function App(){
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </>
    )
}
export default App;
