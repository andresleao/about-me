import styled from 'styled-components';
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';

export const LeftColumn = styled.div`
  grid-area: AS;
  background-color: ${(props) => props.theme.primaryLight};
  padding: 0 0.4rem;
  border-left: solid 7px ${(props) => props.theme.primary};
  border-right: solid 7px ${(props) => props.theme.primary};
`;

export const TitleContainer = styled.div`
  margin-top: 20vh;
  display: flex;
  background-color: ${(props) => props.theme.primary};
  border-radius: 0.5rem;
  padding: 0.4rem 0;
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.secondary};
  font-size: 2.5rem;
  margin-left: 0.2rem;
`;

export const ContentContainer = styled.ul`
  margin-top: 1.2rem;
  list-style: none;
  color: ${(props) => props.theme.secondary};
  background-color: ${(props) => props.theme.primary};
  border-radius: 0.5rem;
  padding: 0.5rem 0.5rem;
`;

export const Item = styled.li`
  display: flex;
  font-size: 1rem;
  margin-bottom: 1rem;
  padding-bottom: 0.8rem;
`;

export const LogoLinkedin = styled(IoLogoLinkedin)`
  min-width: 25px;
`;

export const LogoGithub = styled(IoLogoGithub)`
  min-width: 25px;
`;

export const ExternalLink = styled.a`
  color: ${(props) => props.theme.secondary};
  display: flex;
  align-items: center;
  transition: all 0.4s;
  text-decoration: none;

  &:hover {
    background-color: ${(props) => props.theme.primaryLight};
    transform: translateY(-2px);
    padding: 0.5rem 0;
    border-radius: 0.5rem;
  }
`;
