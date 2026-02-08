import styled from 'styled-components';
import { motion } from 'framer-motion';
import Section from '../common/Section';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { 
  SiPython, SiDjango, SiDotnet, SiSpringboot,
  SiAmazonaws, SiMicrosoftazure, SiGooglecloud 
} from 'react-icons/si';

// Import images
import javaImg from '../../assets/images/java.png';
import csharpImg from '../../assets/images/csharp.png';
import nodeImg from '../../assets/images/node.png';
import sqlImg from '../../assets/images/sql.png';
import jsImg from '../../assets/images/javascript.png';
import reactImg from '../../assets/images/react.png';
import htmlImg from '../../assets/images/html.png';
import cssImg from '../../assets/images/css.png';
import gitImg from '../../assets/images/git.png';
import vscodeImg from '../../assets/images/vscode.png';
import postmanImg from '../../assets/images/postman.png';
import dsaImg from '../../assets/images/dsa.JPG';

interface Skill {
  name: string;
  image?: string;
  icon?: React.ReactNode;
  iconColor?: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const SkillsContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: clamp(2rem, 5vw, 2.5rem);
  text-align: center;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.textLight};
`;

const CategorySection = styled(motion.div)`
  margin-bottom: 3rem;
`;

const CategoryTitle = styled.h3`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.2rem;
  align-items: center;
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.8rem;
  }

  @media (max-width: 320px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SkillCard = styled(motion.div)`
  background: ${({ theme }) => theme.glass.background};
  backdrop-filter: ${({ theme }) => theme.glass.backdropFilter};
  border-radius: 12px;
  padding: 1.2rem 1rem;
  text-align: center;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.colors.cardHoverBorder};
    box-shadow: ${({ theme }) => theme.colors.glowGreen};
  }

  img {
    width: 50px;
    height: 50px;
    object-fit: contain;
    margin-bottom: 0.8rem;
  }

  @media (max-width: 480px) {
    padding: 1rem 0.6rem;

    img {
      width: 40px;
      height: 40px;
    }
  }
`;

const IconWrapper = styled.div<{ $color?: string }>`
  font-size: 50px;
  margin-bottom: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ $color, theme }) => $color || theme.colors.accent};

  @media (max-width: 480px) {
    font-size: 40px;
  }
`;

const SkillName = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.9rem;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

const skillCategories: SkillCategory[] = [
  {
    title: 'Back-End Development',
    skills: [
      { name: 'Python', icon: <SiPython />, iconColor: '#3776AB' },
      { name: 'C#', image: csharpImg },
      { name: 'Java', image: javaImg },
      { name: 'Node.js', image: nodeImg },
      { name: 'SQL', image: sqlImg },
    ]
  },
  {
    title: 'Frameworks',
    skills: [
      { name: 'Django', icon: <SiDjango />, iconColor: '#092E20' },
      { name: '.NET Core', icon: <SiDotnet />, iconColor: '#512BD4' },
      { name: '.NET Framework', icon: <SiDotnet />, iconColor: '#512BD4' },
      { name: 'Spring Boot', icon: <SiSpringboot />, iconColor: '#6DB33F' },
    ]
  },
  {
    title: 'Front-End Development',
    skills: [
      { name: 'JavaScript', image: jsImg },
      { name: 'React', image: reactImg },
      { name: 'HTML5', image: htmlImg },
      { name: 'CSS3', image: cssImg },
    ]
  },
  {
    title: 'Cloud',
    skills: [
      { name: 'AWS', icon: <SiAmazonaws />, iconColor: '#FF9900' },
      { name: 'Azure', icon: <SiMicrosoftazure />, iconColor: '#0078D4' },
      { name: 'GCP', icon: <SiGooglecloud />, iconColor: '#4285F4' },
    ]
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git', image: gitImg },
      { name: 'VS Code', image: vscodeImg },
      { name: 'Postman', image: postmanImg },
      { name: 'DSA', image: dsaImg },
    ]
  }
];

const Skills = () => {
  return (
    <Section id="skills">
      <SkillsContainer>
        <Title>Technical Skills</Title>
        {skillCategories.map((category, index) => (
          <CategorySection
            key={index}
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <CategoryTitle>{category.title}</CategoryTitle>
            <SkillsGrid variants={staggerContainer}>
              {category.skills.map((skill, i) => (
                <SkillCard key={i} variants={fadeInUp}>
                  {skill.image ? (
                    <img src={skill.image} alt={skill.name} />
                  ) : (
                    <IconWrapper $color={skill.iconColor}>{skill.icon}</IconWrapper>
                  )}
                  <SkillName>{skill.name}</SkillName>
                </SkillCard>
              ))}
            </SkillsGrid>
          </CategorySection>
        ))}
      </SkillsContainer>
    </Section>
  );
};

export default Skills;