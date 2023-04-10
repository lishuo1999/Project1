import React from "react";
import {Routes, Route, Link} from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Counter from "./pages/Counter"
import Input from "./pages/Input"
import Inputs from "./pages/Inputs"
import List from "./pages/List"

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/a">Login</Link> | 
        <Link to="/b">Main</Link> | 
        <Link to="/c">Counter</Link> | 
        <Link to="/d">Input</Link> | 
        <Link to="/e">Inputs</Link> | 
        <Link to="/f">List</Link>
      </nav>
      <Routes>
        <Route path="/a" element={<Login />} />
        <Route path="/b" element={<Main />} />
        <Route path="/c" element={<Counter />} />
        <Route path="/d" element={<Input />} />
        <Route path="/e" element={<Inputs />} />
        <Route path="/f" element={<List />} />
      </Routes>
    </div>
  );
}

export default App;
 