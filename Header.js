import React from "react";
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Contact from './Contact'

export default function Header() {
    return (
        <div  className="nav-outer">
        <BrowserRouter>
       <div className="nav-inner">
          <ul>
            <li>
              <Link className="a1" to="/">Home</Link>
            </li>
            <li>
              <Link className="a2" to="/About">About</Link>
            </li>
            <li>
              <Link className="a3" to="/Contact">Contact</Link>
            </li>
          </ul>
          </div>
          
       
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
        </div>

    )

}


{/* <li><Home /></li>
                    <li><About /></li>
                    <li><Contact /></li> */}