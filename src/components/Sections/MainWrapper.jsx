import {StyledMainWrapper} from './sectionStyling'
import { SectionContainer } from './SectionContainer'
import {sectionData} from "./data.js";
import { useState } from 'react';




export const MainWrapper  = ({img}) => {
    const data = sectionData;
    
    const [appState, setAppState] = useState({
        active: null,
        objects: data
    })
    //Click handler for onClick event, hooked on SectionContainer.
    const clickHandler = (index) => {
        setAppState({...appState, active: appState.objects[index] })
        
    }
    //Function for add or remove class that add border to SectionContainer.
    const activeStyleBorder = (index) => {
        if(appState.objects[index] === appState.active){
            return 'onClick-border-style' 
        } else {
            return ''
        }
    }
    //Function that change styling of InnerHeader by add or remove class.
    const activeStyleInnerHeader = (index) => {
        if(appState.objects[index] === appState.active){
            return 'onClick-header-style' 
        } else {
            return ''
        } 
    } 
    
    return <StyledMainWrapper className={'main-wrapper'}>
        <div>
            <img className='fake-video' src={img}/>
        </div>
        <div className='section-wrapper'>
            {appState.objects.map((obj, index) => {
                const {img, title, paragraph, width, opasity,id} = obj
                return <SectionContainer
                    
                    id = {id} 
                    img={img} 
                    title={title} 
                    paragraph={paragraph}
                    width={width}
                    opasity={opasity}
                    onClick={() => clickHandler(index)}
                    classNameMainDiv = {activeStyleBorder(index)}
                    classNameTitle = {activeStyleInnerHeader(index)}
                />
            })}
        </div>
    </StyledMainWrapper>
}
