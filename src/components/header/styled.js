import styled from 'styled-components';
import dev from '../../assets/dev.jpg';
import marcozero from '../../assets/marcozero.jpg';

export const MainHeader = styled.header`
  grid-area: MH;
  height: 26vh;
  background-color: ${(props) => props.theme.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-image: url(${marcozero}), */
  /* background-size: 90rem;
  background-repeat: no-repeat;
  background-position: center; */
  z-index: 1;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.69);
`;

export const PhotoContainer = styled.div`
  height: 9rem;
  width: 9rem;
  background-color: black;
  margin-left: 5.5rem;
  border-radius: 70px;
  background-image: url(${dev});
  background-repeat: no-repeat;
  background-size: 145px;
  border: solid 5px ${(props) => props.theme.primaryLight};
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.69);
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.secondary};
  font-size: 3.4rem;
  margin-right: 5rem;
`;
