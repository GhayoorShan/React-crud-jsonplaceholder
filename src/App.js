import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import List from "./components/List";
import ViewPost from "./components/ViewPost";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/post/:id" element={<ViewPost />} />
          <Route path="/" element={<List />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
