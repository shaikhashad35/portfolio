import styled from 'styled-components';
import { motion } from 'framer-motion';
import Section from '../common/Section';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { FiBriefcase, FiMapPin, FiCalendar } from 'react-icons/fi';

// Inline SVG data URIs for company logos (no external CDN dependency)
const MICROSOFT_LOGO = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23"><rect width="11" height="11" fill="%23f25022"/><rect x="12" width="11" height="11" fill="%237fba00"/><rect y="12" width="11" height="11" fill="%2300a4ef"/><rect x="12" y="12" width="11" height="11" fill="%23ffb900"/></svg>`;

// Pre-computed base64 encoded SVG — white background, red "S&P Global" text
const SP_GLOBAL_LOGO = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcng9IjEyIiBmaWxsPSJ3aGl0ZSIvPjx0ZXh0IHg9IjUwIiB5PSI0MiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjI2IiBmaWxsPSIjY2MwMDAwIj5TJmFtcDtQPC90ZXh0Pjx0ZXh0IHg9IjUwIiB5PSI3MiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjIyIiBmaWxsPSIjY2MwMDAwIj5HbG9iYWw8L3RleHQ+PC9zdmc+`;

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  descriptions: string[];
  logo?: string;
}

const ExperienceContainer = styled.div`
  max-width: 100%;
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
  background: ${({ theme }) => theme.glass.background};
  backdrop-filter: ${({ theme }) => theme.glass.backdropFilter};
  border-radius: 12px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    border-color: ${({ theme }) => theme.colors.cardHoverBorder};
    box-shadow: ${({ theme }) => theme.colors.glowGreen};
    transform: translateY(-2px);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 100%;
    background: ${({ theme }) => theme.colors.accentGradient};
    border-radius: 3px 0 0 3px;
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

const CompanyLogo = styled.img`
  width: 44px;
  height: 44px;
  object-fit: contain;
  border-radius: 6px;
  flex-shrink: 0;
`;

const CompanyInfo = styled.div`
  display: flex;
  align-items: center;
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
    logo: MICROSOFT_LOGO,
    descriptions: [
      'Built an AI agent leveraging OpenAI GPT-4 to perform hourly health checks on 100+ malware detonation VMs, transforming diagnostics into real-time actionable insights.',
      'Leveraged GitHub Copilot/ChatGPT to prototype backend features, cutting development time nearly 50%.',
      'Implemented in-memory file handling in a detonation service to support Antimalware enablement on deployment servers, efficiently processing 50,000+ daily samples.',
      'Automated upgrade of 100+ malware analysis VMs from EOL OS/tooling to latest versions, reducing security vulnerabilities and improving analysis accuracy.'
    ]
  },
  {
    company: 'S&P Global',
    role: 'Senior Software Engineer',
    period: 'Nov 2021 - Aug 2024',
    location: 'India',
    logo: SP_GLOBAL_LOGO,
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
                <CompanyInfo>
                  {exp.logo && <CompanyLogo src={exp.logo} alt={`${exp.company} logo`} />}
                  <div>
                    <CompanyTitle>{exp.company}</CompanyTitle>
                    <Role>{exp.role}</Role>
                  </div>
                </CompanyInfo>
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