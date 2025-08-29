import styled from 'styled-components';
import { motion } from 'framer-motion';
import Section from '../common/Section';
import { fadeInUp, staggerContainer } from '../../utils/animations';

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

interface SkillCategory {
  title: string;
  skills: {
    name: string;
    image: string;
  }[];
}

const SkillsContainer = styled.div`
  max-width: 1000px;
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
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  align-items: center;
`;

const SkillCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 60px;
    height: 60px;
    object-fit: contain;
    margin-bottom: 1rem;
  }
`;

const SkillName = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.9rem;
  margin: 0;
`;

const skillCategories: SkillCategory[] = [
  {
    title: 'Back-End Development',
    skills: [
      { name: 'C#', image: csharpImg },
      { name: 'Java', image: javaImg },
      { name: 'Node.js', image: nodeImg },
      { name: 'SQL', image: sqlImg },
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
                  <img src={skill.image} alt={skill.name} />
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