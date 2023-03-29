import styled from "styled-components";

export const StyledSectionBigHeading = styled.h1`
    
    font-family: Poppins;
    font-weight: 600;
    font-size:3rem;
    line-height: 3.94rem;
    color:black;
    text-align: center;
    margin-bottom: 0px;
    margin-top: 100px;
    font-weight: bold;

    @media (max-width: 1024px){
        margin-top: 20px;
        font-size: 2.5rem;
        font-weight: bold;
    }
    @media (max-width: 650px){
        font-size: 1.5rem;
        margin-top: 20px;
        line-height: 1.5rem;
        font-weight: bolder;
        
    }
`;

export const StyledSectionHeading = styled.h2`
    font-family: Poppins;
    font-size: 2.5rem;
    line-height: 4.375rem;
    font-weight: 600;
    color: black;
`;

export const StyledSectionSubheading = styled.h3`
    font-family: Poppins;
    font-size: 1.25rem;
    line-height: 1.875rem;
    font-weight: 300;
    text-align: center;
    margin-top: 5px;
    color: black;
    @media (max-width: 650px){
        font-size: 0.85rem;
    }
`;

export const StyledSectionInnerHeading =styled.h4`
    font-family: Poppins;
    font-size: 1.25rem;
    line-height: 1.875rem;
    font-weight: 300;
    margin: 0px; 
    font-weight: bold;
    @media (max-width: 650px){
        font-size: 1rem;
    }
`;

export const StyledSectionTinyHeading = styled.h5`
    font-family: Poppins;
    font-size: 0.75rem;
    line-height: 1.125rem;
    font-weight: 300;
    color: black;
`;

export const StyledSectionParagraph = styled.p`
    font-family: Poppins;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 400;  
    margin: 0px;
    color: black;
    max-width: 310px;
    width: 100%;
    @media (max-width: 650px){
        font-size: 0.8rem;
    }
`;
