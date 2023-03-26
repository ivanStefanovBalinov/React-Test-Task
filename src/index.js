import React from "react";
import  ReactDOM  from "react-dom/client";
import './index.css'
import HeaderSection from "./components/Typography/typography";
import Section from "./components/Sections/section";


const TestComponent = () => {
    
    return <div>
        <HeaderSection/>
        <Section/>
       
        
    </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<TestComponent/>)