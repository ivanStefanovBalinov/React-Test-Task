import { StyledSectionInnerHeading } from "./elements";

export const SectionInnerHeading = ({title, className}) => {
    return <StyledSectionInnerHeading className={className}>
       {title}
    </StyledSectionInnerHeading>
}
