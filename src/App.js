import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  import ParserVisualizer from "./ParserVisualizer";
import Traverse from "./Traverse";

export default function App() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/parser">Parser</Link>
              </li>
              <li>
                <Link to="/traverse">Traverse</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/parser" element={<ParserVisualizer />} />
            <Route path="/traverse" element={<Traverse />} />
            <Route path="/" element={<div>Home</div>}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
