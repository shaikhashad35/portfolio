import React, { Component, ErrorInfo } from 'react';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  padding: 2rem;
  margin: 2rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.textLight};
`;

const ErrorHeading = styled.h2`
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 1rem;
`;

const ErrorMessage = styled.pre`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 1rem;
  border-radius: 4px;
  overflow-x: auto;
  margin: 1rem 0;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.9rem;
`;

const ReloadButton = styled.button`
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.heading};
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    transform: translateY(-2px);
    opacity: 0.9;
  }
`;

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({
      error,
      errorInfo
    });
    
    // Log error to your preferred error tracking service
    console.error('Error caught by boundary:', error, errorInfo);
  }

  handleReload = (): void => {
    window.location.reload();
  };

  render(): React.ReactNode {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <ErrorHeading>Something went wrong</ErrorHeading>
          <p>We apologize for the inconvenience. Please try reloading the page.</p>
          {process.env.NODE_ENV === 'development' && this.state.error && (
            <>
              <ErrorMessage>
                {this.state.error.toString()}
                {this.state.errorInfo?.componentStack}
              </ErrorMessage>
            </>
          )}
          <ReloadButton onClick={this.handleReload}>
            Reload Page
          </ReloadButton>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;