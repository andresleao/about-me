import styled from 'styled-components';
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';

export const LeftColumn = styled.div`
  grid-area: AS;
  background-color: ${(props) => props.theme.primaryLight};
  padding: 0 0.4rem;
  border-left: solid 7px ${(props) => props.theme.primary};
  border-right: solid 7px ${(props) => props.theme.primary};
`;

export const ThemeButton = styled.button`
  margin-top: 20vh;
  margin-bottom: 2.2rem;
  width: 100%;
  padding: 0.6rem 0;
  border-radius: 0.5rem;
  border: none;
  outline: none;
  color: ${(props) => props.theme.primary};
  background-color: #fff;
  transition: all 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.secondary};
    transform: translateY(-4px);
    outline: 2px solid ${(props) => props.theme.secondary};
    box-shadow: 5px 15px 15px 0px rgba(0, 0, 0, 0.69);
  }

  &:active {
    background-color: ${(props) => props.theme.primaryLight};
    box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.69);
  }
`;

export const TitleContainer = styled.div`
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

export const Paragraph = styled.p`
  color: ${(props) => props.theme.secondary};
  font-size: 0.9rem;
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
    color: #f0f008;
  }
`;
