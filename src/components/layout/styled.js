import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 315px auto;
  grid-template-rows: 70px auto;
  grid-template-areas:
    'MH MH'
    'AS CT';
  height: 100vh;
`;