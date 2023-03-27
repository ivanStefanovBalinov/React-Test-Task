import { StyledSectionContainer } from "./sectionStyling";
import { SectionInnerHeading } from "../Typography/SectionInnerHeading";
import SectionParagraph from "../Typography/SectionParagraph";


export const SectionContainer = ({img, title, paragraph,  width, opasity}) => {
    
    return <StyledSectionContainer 
        style={{width:`${width}`, 
        backgroundColor:`rgba(241, 241, 241, ${opasity})`}} 
        className="section-text-wrapper" >
        <div className="section-img-wrapper"><img className="section-img" src={img} alt={title}/></div>
        <div>
            <SectionInnerHeading title={title}></SectionInnerHeading>
            <SectionParagraph paragraph={paragraph}></SectionParagraph>
        </div>
    </StyledSectionContainer>
}
