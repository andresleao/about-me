import styled from 'styled-components';

export const SkillsList = styled.ul`
  list-style: none;
  margin-top: 1rem;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  display: grid;
  grid-template-areas: 'lb ct';
  grid-template-columns: 2rem auto;
`;

export const Label = styled.div`
  grid-area: 'lb';
`;

export const SkillBar = styled.div`
  grid-area: 'ct';
  position: relative;
  height: 0.5rem;
  width: 11rem;
  border-radius: 0.5rem;
  padding: 0.55rem 0;
  background-color: ${(props) => props.theme.tertiary};
  margin-left: 3.8rem;
`;

export const BarValue = styled(SkillBar)`
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 0;
  background-color: ${(props) => props.theme.barColor};
  width: ${(props) => props.width};
`;
