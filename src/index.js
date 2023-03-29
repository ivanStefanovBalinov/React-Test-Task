import React from "react";
import  ReactDOM  from "react-dom/client";
import './index.css'
import HeaderSection from "./components/Typography/index";
import Section from "./components/Sections/index";


const ComponentStructure = () => {
    
    return <div>
        <HeaderSection/>
        <Section/>
       
        
    </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<ComponentStructure/>)
