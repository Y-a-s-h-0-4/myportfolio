import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaEye } from 'react-icons/fa6';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import { experiences } from '../data/constants';


// Define theme interface
interface Theme {
  text_primary: string;
  text_secondary: string;
}

const Top = styled.div`
  width: 100%;
  display: flex;
  max-width: 100%;
  gap: 12px;
`;

const Image = styled.img`
  height: 50px;
  border-radius: 10px;
  margin-top: 4px;
  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Role = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => (theme as Theme).text_primary}99;
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Company = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => (theme as Theme).text_secondary}99;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => (theme as Theme).text_secondary}80;
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => (theme as Theme).text_primary}99;
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Skills = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  margin-top: -10px;
`;

const Span = styled.div`
  display: -webkit-box;
  max-width: 100%;
`;

const Skill = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => (theme as Theme).text_primary}99;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => (theme as Theme).text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => (theme as Theme).text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ExperienceCard: React.FC<{ experience: typeof experiences[0]; index: number }> = ({ experience, index }) => {
  const [status, setStatus] = useState(0);

  return (
    <VerticalTimelineElement
      icon={
        <img
          width="100%"
          height="100%"
          alt={experience.company}
          style={{ borderRadius: "50%", objectFit: "cover" }}
          src={experience.img}
        />
      }
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        background: "#1d1836",
        color: "#fff",
        boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
        backgroundColor: "rgba(17, 25, 40, 0.83)",
        border: "1px solid rgba(255, 255, 255, 0.125)",
        borderRadius: "6px",
      }}
      contentArrowStyle={{
        borderRight: "7px solid  rgba(255, 255, 255, 0.3)",
      }}
      date={experience.date}
    >
      <Top>
        <Image src={experience.img} alt={experience.company} />
        <Body>
          <Role>{experience.role}</Role>
          <Company>{experience.company}</Company>
          <Date>{experience.date}</Date>
        </Body>
        <button 
          className="btn" 
          style={{ backgroundColor: "#101725", border: "none" }}
          title="View company website"
        >
          <FaEye
            onMouseEnter={() => setStatus(1)}
            onMouseLeave={() => setStatus(0)}
            size={50}
            color={status ? "#854ce6" : "white"}
            onClick={() => window.open(experience.refLink, "_blank")}
          />
        </button>
      </Top>
      <Description>
        {experience.desc && <Span>{experience.desc}</Span>}
        {experience.skills && (
          <>
            <br />
            <Skills>
              <b>Skills</b>
              <ItemWrapper>
                {experience.skills.map((skill, idx) => (
                  <Skill key={idx}>• {skill}</Skill>
                ))}
              </ItemWrapper>
            </Skills>
          </>
        )}
      </Description>
    </VerticalTimelineElement>
  
  );
};

const ExperienceSection: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container id="experience">
        <Wrapper>
          <Title>Experience</Title>
          <Desc style={{ marginBottom: "40px" }}>
            My work experience as a Software Developer and working on different companies and projects.
          </Desc>

          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
                index={index}
              />
            ))}
          </VerticalTimeline>
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
};

export default ExperienceSection;
