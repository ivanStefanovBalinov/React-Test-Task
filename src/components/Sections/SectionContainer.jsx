import { StyledSectionContainer } from "./elements";
import { SectionInnerHeading } from "../Typography/SectionInnerHeading";
import SectionParagraph from "../Typography/SectionParagraph";

export const SectionContainer = ({ img, title, paragraph, width, opacity, onClick, classNameMainDiv, classNameTitle }) => {
  return (
    <StyledSectionContainer onClick={onClick}
      style={{
        width: `${width}`,
        backgroundColor: `rgba(241, 241, 241, ${opacity})`,
      }}
      className={classNameMainDiv}
    >
      <div>
        <img className="section-img" src={img} alt={title} />
      </div>
      <div>
        <SectionInnerHeading className={classNameTitle} title={title}></SectionInnerHeading>
        <SectionParagraph paragraph={paragraph}></SectionParagraph>
      </div>
    </StyledSectionContainer>
  );
};
