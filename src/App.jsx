import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./assets/Components/Header";
import AddNewData from "./assets/Components/AddNewData";
import ViewData from "./assets/Components/ViewData";
import Home from "./assets/Components/Home";
import EditData from "./assets/Components/EditData";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addnewdata" element={<AddNewData />} />
          <Route path="/viewdata" element={<ViewData />} />
          <Route path="/editdata/:id" element={<EditData />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
