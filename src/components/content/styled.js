import styled from 'styled-components';

export const Container = styled.div`
  grid-area: CT;
  background-color: ${(props) => props.theme.tertiary};
  margin-top: 15vh;
  padding: 2.5rem 4.5rem;
`;

export const Content = styled.div`
  background-color: ${(props) => props.theme.secondary};
  border-radius: 0.5rem;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.69);
  margin-bottom: 1.9rem;
  padding: 1rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.primary};
  padding: 0.4rem 0;
  border-radius: 0.5rem;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.69);
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  margin-left: 0.5rem;
  color: ${(props) => props.theme.secondary};
`;

export const Paragraph = styled.p`
  margin-top: 0.8rem;
  line-height: 1.4;
`;

export const CoursesList = styled.ul`
  padding: 0 1.7rem;
`;

export const Course = styled.li`
  margin-bottom: 1rem;
`;
