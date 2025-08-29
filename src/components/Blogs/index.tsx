import styled from 'styled-components';
import { motion } from 'framer-motion';
import Section from '../common/Section';
import { fadeInUp, staggerContainer } from '../../utils/animations';

// Import images with correct path
import blog1Img from '../../assets/images/blog1.JPG';
import blog2Img from '../../assets/images/blog2.JPG';
import blog3Img from '../../assets/images/blog3.JPG';
import blog4Img from '../../assets/images/blog4.JPG';

interface BlogPost {
  title: string;
  description: string;
  image: string;
  url: string;
  date: string;
  readTime: string;
}

const BlogsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: clamp(2rem, 5vw, 2.5rem);
  text-align: center;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.textLight};
`;

const BlogGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const BlogCard = styled(motion.a)`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
  overflow: hidden;
  text-decoration: none;
  transition: ${({ theme }) => theme.transitions.default};
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);

    .image-overlay {
      opacity: 0.2;
    }

    .blog-title {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

const ImageContainer = styled.div`
  position: relative;
  padding-top: 56.25%; // 16:9 aspect ratio
  overflow: hidden;
`;

const BlogImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  opacity: 0.4;
  transition: ${({ theme }) => theme.transitions.default};
`;

const BlogContent = styled.div`
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const BlogTitle = styled.h3`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 1.2rem;
  margin-bottom: 1rem;
  transition: ${({ theme }) => theme.transitions.default};
`;

const BlogDescription = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  flex-grow: 1;
`;

const BlogMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.8rem;
  font-family: ${({ theme }) => theme.fonts.heading};
`;

const blogPosts: BlogPost[] = [
  {
    title: 'Memory Caching for Better Performance',
    description: 'Learn how to implement memory caching to improve your application performance and reduce database load.',
    image: blog1Img,
    url: 'https://medium.com/@shaikhashad35/memory-caching-for-better-performance-d7c1c607e2c2',
    date: 'Mar 15, 2023',
    readTime: '5 min read'
  },
  {
    title: 'Logging and Log Maintenance',
    description: 'A comprehensive guide to implementing effective logging strategies and maintaining logs in production.',
    image: blog2Img,
    url: 'https://medium.com/@shaikhashad35/logging-and-log-maintenance-4676e14ec7c0',
    date: 'Apr 2, 2023',
    readTime: '6 min read'
  },
  {
    title: 'Microservices Architecture in a Nutshell',
    description: 'Understanding microservices architecture, its benefits, and implementation strategies.',
    image: blog3Img,
    url: 'https://medium.com/@shaikhashad35/microservices-architecture-in-a-nutshell-4d3079f06adc',
    date: 'May 10, 2023',
    readTime: '7 min read'
  },
  {
    title: 'Continuous Deployment Using Netlify and GitHub',
    description: 'Step-by-step guide to setting up continuous deployment for your website using Netlify and GitHub.',
    image: blog4Img,
    url: 'https://medium.com/@shaikhashad35/continuous-deployment-of-website-using-netlify-and-github-8ab5aeced21d',
    date: 'Jun 20, 2023',
    readTime: '4 min read'
  }
];

const Blogs = () => {
  return (
    <Section id="blogs">
      <BlogsContainer>
        <Title>Technical Blog Posts</Title>
        <BlogGrid
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInUp}
            >
              <ImageContainer>
                <BlogImage src={post.image} alt={post.title} />
                <ImageOverlay className="image-overlay" />
              </ImageContainer>
              <BlogContent>
                <BlogTitle className="blog-title">{post.title}</BlogTitle>
                <BlogDescription>{post.description}</BlogDescription>
                <BlogMeta>
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </BlogMeta>
              </BlogContent>
            </BlogCard>
          ))}
        </BlogGrid>
      </BlogsContainer>
    </Section>
  );
};

export default Blogs;