import {StyledMainWrapper} from './sectionStyling'
import { SectionContainer } from './SectionContainer'
import {sectionData} from "./data.js";



export const MainWrapper  = ({img}) => {
    const data = sectionData

    
    return <StyledMainWrapper className='main-wrapper'>
        <div>
            <img className='fake-video' src={img}/>
        </div>
        <div className='section-wrapper'>
            {data.map((obj) => {
                const {img, title, paragraph, width, opasity} = obj
                return <SectionContainer 
                img={img} 
                title={title} 
                paragraph={paragraph}
                width={width}
                opasity={opasity}/>
            })}
        </div>
    </StyledMainWrapper>
}
