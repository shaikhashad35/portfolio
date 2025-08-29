import styled from 'styled-components';
import { motion } from 'framer-motion';
import Section from '../common/Section';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { FiBriefcase, FiMapPin, FiCalendar } from 'react-icons/fi';

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  descriptions: string[];
}

const ExperienceContainer = styled.div`
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

const ExperienceCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
  padding: 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

const CompanyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const CompanyTitle = styled.h3`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const Role = styled.h4`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const MetaInfo = styled.div`
  display: flex;
  gap: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;

  li {
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 1rem;
    position: relative;
    padding-left: 1.5rem;
    line-height: 1.6;

    &::before {
      content: '▹';
      position: absolute;
      left: 0;
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

const experiences: Experience[] = [
  {
    company: 'Microsoft',
    role: 'Software Engineer II',
    period: 'Aug 2024 - Present',
    location: 'Remote',
    descriptions: [
      'Working as Backend Engineer for Microsoft Defender for Endpoints',
      'Leveraging GitHub Copilot/ChatGPT to prototype backend features, cutting development time nearly in half.'
    ]
  },
  {
    company: 'S&P Global',
    role: 'Senior Software Engineer',
    period: 'Nov 2021 - Aug 2024',
    location: 'India',
    descriptions: [
      'Engineered a Python package for sharded DB connection management, reducing master DB load by 70% and boosting connection resiliency.',
      'Designed an automated regression testing system for backend service, cutting manual QA cycles by 30%, reducing post release bugs.',
      'Built a Python microservice to extract financial tables from 100+ PDFs daily, cutting research analysts\' data prep time from 1 hour to 15 minutes per report.',
      'Streamlined SQL data porting to UAT by implementing a graph-based topological sorting algorithm that resolved primary key dependency conflicts across 100+ relational tables.',
      'Built a Slack bot enabling support teams to resolve recurring issues, saving engineering 1–2 hours per sprint.',
      'Implemented a robust CI/CD test suite for 3 microservices using in-memory databases, increasing test coverage by 40–50%.'
    ]
  },
  {
    company: 'Nagarro ATCS',
    role: 'Associate Software Engineer',
    period: 'Nov 2020 - Sept 2021',
    location: 'India',
    descriptions: [
      'Developed Outlook plugin capturing car deals mail data via REST APIs, reducing manual entry by 50%.',
      'Designed a .NET backend for a branch management system supporting 350+ Indian bank branches.',
      'Led development of car dealership module with dashboard and deal notifications, directly contributing to $1M+ monthly revenue.',
      'Enhanced 2 BFSI apps by integrating logging, caching, and mailer services, boosting performance and reliability.'
    ]
  },
  {
    company: 'U-TO Solutions',
    role: 'Associate Software Engineer',
    period: 'Nov 2019 - Oct 2020',
    location: 'India',
    descriptions: [
      'Optimized movie rights acquisition dashboard load time from 3-5 minutes to 10 seconds via bucket-based algorithm and background pre-computation.',
      'Delivered key features for SaaS platform used by Sony, Viacom, enabling efficient digital rights acquisition & syndication for millions of media assets, improving client workflows.'
    ]
  }
];

const Experience = () => {
  return (
    <Section id="experience">
      <ExperienceContainer>
        <Title>Experience</Title>
        <Timeline
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} variants={fadeInUp}>
              <CompanyHeader>
                <div>
                  <CompanyTitle>{exp.company}</CompanyTitle>
                  <Role>{exp.role}</Role>
                </div>
              </CompanyHeader>
              <MetaInfo>
                <MetaItem>
                  <FiCalendar />
                  <span>{exp.period}</span>
                </MetaItem>
                <MetaItem>
                  <FiMapPin />
                  <span>{exp.location}</span>
                </MetaItem>
              </MetaInfo>
              <List>
                {exp.descriptions.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </List>
            </ExperienceCard>
          ))}
        </Timeline>
      </ExperienceContainer>
    </Section>
  );
};

export default Experience;