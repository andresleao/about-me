import * as S from './styled';
import { IoMdContact, IoMdHome } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { BsFillBookFill } from 'react-icons/bs';

const Aside = () => {
  return (
    <S.LeftColumn>
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
          <S.ExternalLink>
            <S.LogoLinkedin size={25} style={{ marginRight: '.5rem' }} />
            linkedin.com/in/andr%C3%A9-felipe-bezerra-de-souza-le%C3%A3o-119b6b193/
          </S.ExternalLink>
        </S.Item>
        <S.Item>
          <S.ExternalLink href="https://github.com/andresleao" target="_blank">
            <S.LogoGithub size={25} style={{ marginRight: '.5rem' }} />
            https://github.com/andresleao
          </S.ExternalLink>
        </S.Item>
      </S.ContentContainer>

      <S.TitleContainer style={{ marginTop: '2rem' }}>
        <BsFillBookFill
          size={35}
          color={'white'}
          style={{ marginLeft: '2rem', marginTop: '6px', marginRight: '.5rem' }}
        />
        <S.Title>Formação</S.Title>
      </S.TitleContainer>
    </S.LeftColumn>
  );
};

export default Aside;
