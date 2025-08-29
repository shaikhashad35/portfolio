import styled from 'styled-components';
import { motion } from 'framer-motion';
import Section from '../common/Section';
import { fadeInUp, staggerContainer } from '../../utils/animations';

interface Certificate {
  title: string;
  period?: string;
  items: string[];
}

const CertificatesContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: clamp(2rem, 5vw, 2.5rem);
  text-align: center;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.textLight};
`;

const CardsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const Card = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardTitle = styled.h3`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const Period = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.9rem;
  font-family: ${({ theme }) => theme.fonts.heading};
  margin-bottom: 1rem;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;

  li {
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 0.5rem;
    position: relative;
    padding-left: 1.5rem;

    &::before {
      content: '▹';
      position: absolute;
      left: 0;
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

const certificates: Certificate[] = [
  {
    title: 'Newton School',
    period: 'May 2021 - Present',
    items: [
      'Learned Data Structures & Algorithm with Full Stack Web Development.',
      'Technical Stack learned: Java, NodeJS, ExpressJS, ReactJS, HTML, CSS, JavaScript.',
      'Top Rank holders in various coding contest organized by the platform and participated in various Hackathons with 300+ assignments.',
    ]
  },
  {
    title: 'Hackerrank',
    items: [
      'Javascript (Intermediate)',
      'SQL (Intermediate)',
      'Problem Solving'
    ]
  },
  {
    title: 'LinkedIn',
    items: [
      'C# & .NET: Programming',
      'Learning SQL Programming',
      'HTML Essential Training',
      'Programming Foundation: Databases'
    ]
  },
  {
    title: 'Coursera',
    items: [
      'Building Web Application in PHP',
      'Introduction to Structured Query Language(SQL)',
      'Programming for Everybody & Data Structures in Python.'
    ]
  }
];

const Certificates = () => {
  return (
    <Section id="certificates">
      <CertificatesContainer>
        <Title>Certifications & Training</Title>
        <CardsGrid
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {certificates.map((cert, index) => (
            <Card key={index} variants={fadeInUp}>
              <CardTitle>{cert.title}</CardTitle>
              {cert.period && <Period>{cert.period}</Period>}
              <List>
                {cert.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </List>
            </Card>
          ))}
        </CardsGrid>
      </CertificatesContainer>
    </Section>
  );
};

export default Certificates;