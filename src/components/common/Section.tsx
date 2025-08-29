import { forwardRef } from 'react';
import styled from 'styled-components';
import { motion, Variants } from 'framer-motion';
import { withPerformanceTracking } from '../../utils/performance';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
}

const SectionContainer = styled(motion.section)`
  min-height: 100vh;
  padding: 6rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  position: relative;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 4rem 1rem;
  }
`;

const defaultVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

const Section = forwardRef<HTMLElement, SectionProps>(({ 
  id, 
  children, 
  className,
  variants = defaultVariants 
}, ref) => {
  return (
    <SectionContainer
      ref={ref}
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants}
    >
      {children}
    </SectionContainer>
  );
});

Section.displayName = 'Section';

export default withPerformanceTracking(Section, 'Section');