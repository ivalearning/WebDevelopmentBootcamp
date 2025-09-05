import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import '../src/styles.css';
import Note from "./Note.jsx";

function App() {
    return  <div>
        <Header /> 
        <Note />
        <Footer />
    </div>
};

export default App;