import * as S from './styled';
import abilities from '../../repositories/abilities';

function Skills() {
  return (
    <S.SkillsList>
      {abilities.map((abilitie) => (
        <S.Item key={abilitie.name}>
          <S.Label> {abilitie.name}</S.Label>
          <S.SkillBar>
            <S.BarValue width={abilitie.width} />
          </S.SkillBar>
        </S.Item>
      ))}
    </S.SkillsList>
  );
}

export default Skills;
