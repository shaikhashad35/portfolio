import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin, FiAward } from 'react-icons/fi';
import Section from '../common/Section';
import { fadeInUp, staggerContainer } from '../../utils/animations';

interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
  score: string;
}

const EducationContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: clamp(2rem, 5vw, 2.5rem);
  text-align: center;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.textLight};
`;

const Timeline = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const EducationCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    transform: translateY(-5px);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(
      to bottom,
      ${({ theme }) => theme.colors.accent},
      transparent
    );
  }
`;

const Institution = styled.h3`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const Degree = styled.h4`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const MetaInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.9rem;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const educationData: Education[] = [
  {
    institution: 'UNIVERSITY OF MUMBAI',
    degree: 'BE in Computer Science',
    period: '2015-2019',
    location: 'Mumbai',
    score: 'CGPA: 8.29/10'
  },
  {
    institution: 'RIZVI COLLEGE OF ASC',
    degree: '12th in Science-IT',
    period: '2013-2015',
    location: 'Mumbai',
    score: '75%'
  },
  {
    institution: 'ST. MICHAEL HIGH SCHOOL',
    degree: '10th Standard',
    period: '2013',
    location: 'Mumbai',
    score: '85%'
  }
];

const Education = () => {
  return (
    <Section id="education">
      <EducationContainer>
        <Title>Education</Title>
        <Timeline
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {educationData.map((edu, index) => (
            <EducationCard key={index} variants={fadeInUp}>
              <Institution>{edu.institution}</Institution>
              <Degree>{edu.degree}</Degree>
              <MetaInfo>
                <MetaItem>
                  <FiCalendar />
                  <span>{edu.period}</span>
                </MetaItem>
                <MetaItem>
                  <FiMapPin />
                  <span>{edu.location}</span>
                </MetaItem>
                <MetaItem>
                  <FiAward />
                  <span>{edu.score}</span>
                </MetaItem>
              </MetaInfo>
            </EducationCard>
          ))}
        </Timeline>
      </EducationContainer>
    </Section>
  );
};

export default Education;