import styled from "styled-components";
import {StyledSectionInnerHeading} from '../Typography/elements'

export const StyledMainWrapper = styled.div`
    display: flex;
    max-width: 1920px;
    width: 100%;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2rem;
    margin-bottom: 2rem;

    @media (max-width: 1024px) {
        flex-direction: column;
        
      }
`;

export const StyledSectionContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-content: normal;
    align-items: center;
    justify-content: flex-start
    gap: 20px;
    border-radius: 10px;
    padding: 10px;
    height: 140px;
    cursor: pointer;
    box-sizing: border-box;
    &:hover,
    &:focus {
        border: 2px solid #4092FD;
        ${StyledSectionInnerHeading}{
            color: #4092FD;
            text-decoration: underline;
        };
    };
    @media (max-width: 650px){
        font-size: 1rem;
        height: 120px;
        gap: 10px;
        padding: 0px;
        
    }
`;
