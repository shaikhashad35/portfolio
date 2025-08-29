import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLink } from 'react-icons/fa';
import Section from '../common/Section';
import { fadeInUp, staggerContainer } from '../../utils/animations';

interface Project {
  title: string;
  description: string[];
  github: string;
  demo: string;
  tech: string[];
}

const ProjectsContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: clamp(2rem, 5vw, 2.5rem);
  text-align: center;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.textLight};
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
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

const ProjectTitle = styled.h3`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 1.2rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const IconLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.2rem;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-2px);
  }
`;

const Description = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  margin-bottom: 1.5rem;

  li {
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 0.5rem;
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

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const TechTag = styled.span`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.accent};
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-family: ${({ theme }) => theme.fonts.heading};
`;

const projects: Project[] = [
  {
    title: 'CovR - Covid Resources',
    description: [
      'Developed Website for Covid Resources which can be used in Pandemics.',
      'NodeJS server fetches the latest tweet using Twitter API.',
      'Technologies Used : NodeJS, HTML, Javascript, CSS'
    ],
    github: 'https://github.com/shaikhashad35/CovR',
    demo: 'https://gentle-headland-89379.herokuapp.com/',
    tech: ['Node.js', 'HTML', 'JavaScript', 'CSS', 'Twitter API']
  },
  {
    title: 'Twitter Backend API',
    description: [
      'Developed Twitter Backend API using NodeJS with JWT authentication',
      'Functionalities - Follow/Unfollow, Like/Unlike, Login/Signup, etc',
      'Technologies Used : NodeJS, ExpressJS, MongoDB'
    ],
    github: 'https://github.com/shaikhashad35/TwitterBackend',
    demo: 'https://aqueous-tundra-14265.herokuapp.com/',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'JWT']
  },
  {
    title: 'AAHAAR - Food Donation',
    description: [
      'Developed Food Donation Website for Needy & NGO',
      'Technologies Used : HTML, CSS, PHP, MySQL'
    ],
    github: 'https://github.com/shaikhashad35/Aahar',
    demo: 'https://drive.google.com/drive/folders/1lDQRTAhWdbBI1k8zMknwEIEMXxw1Pen9',
    tech: ['PHP', 'MySQL', 'HTML', 'CSS']
  },
  {
    title: 'Portfolio Website',
    description: [
      'Developed portfolio having navbar with all details required',
      'Technologies Used : ReactJS, JSX, HTML, Bootstrap'
    ],
    github: 'https://github.com/shaikhashad35/portfolio',
    demo: 'https://shaikhashad35.github.io/portfolio/',
    tech: ['React', 'TypeScript', 'Styled Components', 'Framer Motion']
  }
];

const Projects = () => {
  return (
    <Section id="projects">
      <ProjectsContainer>
        <Title>Featured Projects</Title>
        <ProjectsGrid
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} variants={fadeInUp}>
              <ProjectTitle>
                {project.title}
                <ProjectLinks>
                  <IconLink 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="GitHub Repository"
                  >
                    <FaGithub />
                  </IconLink>
                  <IconLink 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Live Demo"
                  >
                    <FaLink />
                  </IconLink>
                </ProjectLinks>
              </ProjectTitle>
              <Description>
                {project.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </Description>
              <TechList>
                {project.tech.map((tech, i) => (
                  <TechTag key={i}>{tech}</TechTag>
                ))}
              </TechList>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContainer>
    </Section>
  );
};

export default Projects;