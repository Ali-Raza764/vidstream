// import { lazy } from "react";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Home, SearchResults, VideoPlayer} from "./screens";
import './App.css'

const App = () => {
  
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/results/:id"
            element={<SearchResults />}
          />
          <Route
            path="/watch/:id"
            element={<VideoPlayer />}
          />
        </Routes>
      </Router>
    </>
  );
}
export default App
