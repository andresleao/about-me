import * as S from './styled';
import { IoMdContact, IoMdHome } from 'react-icons/io';
import { MdEmail, MdNightlightRound } from 'react-icons/md';
import { BsFillBookFill, BsFillSunFill, BsDiagram3Fill } from 'react-icons/bs';
import mainTheme from '../../styles/themes/mainTheme';
import darkTheme from '../../styles/themes/darkTheme';
import Skills from '../skills/Skills';

const Aside = ({ theme, setTheme }) => {
  const handleTheme = () => {
    if (theme.default === '#000') {
      setTheme(darkTheme);
    } else {
      setTheme(mainTheme);
    }
  };

  return (
    <S.LeftColumn>
      <S.ThemeButton onClick={() => handleTheme()}>
        {theme === mainTheme ? (
          <MdNightlightRound size={30} />
        ) : (
          <BsFillSunFill size={30} />
        )}
      </S.ThemeButton>
      <S.TitleContainer>
        <IoMdContact size={50} color={'white'} style={{ marginLeft: '3rem' }} />
        <S.Title>Contato</S.Title>
      </S.TitleContainer>
      <S.ContentContainer>
        <S.Item style={{ marginTop: '1rem' }}>
          <IoMdHome size={25} style={{ marginRight: '.5rem' }} />
          Recife-PE
        </S.Item>
        <S.Item>
          <MdEmail size={25} style={{ marginRight: '.5rem' }} />
          andrefelipesl123@gmail.com
        </S.Item>
        <S.Item>
          <S.ExternalLink
            href=" https://www.linkedin.com/in/andr%C3%A9-felipe-bezerra-de-souza-le%C3%A3o-119b6b193/"
            target="_blank"
          >
            <S.LogoLinkedin size={25} style={{ marginRight: '.5rem' }} />
            linkedin.com/in/andr%C3%A9-felipe-bezerra-de-souza-le%C3%A3o-119b6b193/
          </S.ExternalLink>
        </S.Item>
        <S.Item>
          <S.ExternalLink href="https://github.com/andresleao" target="_blank">
            <S.LogoGithub size={25} style={{ marginRight: '.5rem' }} />
            github.com/andresleao
          </S.ExternalLink>
        </S.Item>
      </S.ContentContainer>

      <S.TitleContainer style={{ marginTop: '4.3rem' }}>
        <BsFillBookFill
          size={35}
          color={'white'}
          style={{ marginLeft: '2rem', marginTop: '6px', marginRight: '.5rem' }}
        />
        <S.Title>Forma????o</S.Title>
      </S.TitleContainer>
      <S.ContentContainer>
        <S.Item style={{ marginTop: '1rem' }}>
          <S.Paragraph>
            Graduado em An??lise e Desenvolvimento de Sistemas ??? Centro
            Universit??rio Tiradentes ??? UNIT ??? 2021.
          </S.Paragraph>
        </S.Item>
        <S.Item style={{ marginTop: '1rem' }}>
          <S.Paragraph>
            Graduado em Engenharia Civil ??? Faculdade Mauricio de Nassau ??? 2019.
          </S.Paragraph>
        </S.Item>
        <S.Item style={{ marginTop: '1rem' }}>
          <S.Paragraph>
            Graduado em Comunica????o Social ??? Publicidade e Propaganda ???
            Universidade Cat??lica de Pernambuco ??? UNICAP ??? 2006.
          </S.Paragraph>
        </S.Item>
        <S.Item style={{ marginTop: '1rem' }}>
          <S.Paragraph>
            P??s-Gradua????o: Gest??o de Marketing - Universidade Federal de
            Pernambuco ??? UFPE ??? 2008
          </S.Paragraph>
        </S.Item>
      </S.ContentContainer>

      <S.TitleContainer style={{ marginTop: '4.3rem' }}>
        <BsDiagram3Fill
          size={35}
          color={'white'}
          style={{ marginLeft: '1rem', marginTop: '6px', marginRight: '.5rem' }}
        />
        <S.Title>Habilidades</S.Title>
      </S.TitleContainer>
      <S.ContentContainer>
        <Skills />
      </S.ContentContainer>
    </S.LeftColumn>
  );
};

export default Aside;
