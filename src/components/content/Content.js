import * as S from './styled';
import { MdWork, MdTipsAndUpdates } from 'react-icons/md';

function Content() {
  return (
    <>
      <S.Container>
        <S.Content>
          <S.TitleContainer>
            <MdWork size={30} color={'white'} style={{ marginLeft: '1rem' }} />
            <S.Title>Sobre Mim</S.Title>
          </S.TitleContainer>
          <S.Paragraph>
            Atuei como estagiário na empresa Bisaweb, na área de desenvolvimento
            web (nov. 2020 - jun. 2021). Desenvolvi soluções para um sistema de
            gerenciamento financeiro. Para isso, utilizei conhecimentos na
            linguagem PHP, Javascript, Jquery, HTML, CSS, Bootstrap, Banco de
            Dados MYSQL e framework CodeIgniter. Possuo formação em Análise e
            Desenvolvimento de Sistemas pela UNIT (2021), em Engenharia Civil
            (2019), pela UNINASSAU, Publicidade e Propaganda (2006), pela
            UNICAP, e MBA em Gestão de Marketing (2008), pela UFPE.
          </S.Paragraph>
        </S.Content>
        <S.Content>
          <S.TitleContainer>
            <MdTipsAndUpdates
              size={30}
              color={'white'}
              style={{ marginLeft: '1rem' }}
            />
            <S.Title>Cursos</S.Title>
          </S.TitleContainer>
          <S.Paragraph>
            <S.CoursesList>
              <S.Course>
                Cursando: Implement High Fidelity Designs With Material UI and
                ReactJs; Advanced CSS and SASS: Flexbox, Grid, Animations; React
                Front to Back 2022.
              </S.Course>
              <S.Course>
                React e TypeScript: Desenvolvendo um Dashboard - Udemy - C.H.
                16.5h.
              </S.Course>
              <S.Course>
                NodeJs: Build The Complete E-Commerce Wep API - Udemy - C.H. 6h.
              </S.Course>
              <S.Course>
                Criando APIs com NodeJs, Express, MongoDB e SQL - Udemy - C.H.
                6h.
              </S.Course>
              <S.Course>
                Angular 9 e Spring Boot 2.2: Fullstack Completo - Udemy - C.H.
                20h.
              </S.Course>
              <S.Course>Angular 9 - Essencial - Cod3r - C.H. 13h.</S.Course>
              <S.Course>
                Iniciando com Spring Boot - School of Net – C.H. 6h.
              </S.Course>
              <S.Course>
                Academia Java – Orientação a objeto; Banco de Dados JDBC e SQL
                com Oracle XE e JPA e Design Patterns (DAO); Java no mundo Web -
                FUCTURA – C.H. 102h.
              </S.Course>
              <S.Course>CSS Flexbox - C.H. 6h - Origamid</S.Course>
              <S.Course>PHP com MVC - School of Net – C.H. 7h.</S.Course>
              <S.Course>Composer - School of Net – C.H. 4h.</S.Course>
              <S.Course>
                Iniciando com Laravel – School of Net – C.H. 11h.
              </S.Course>
              <S.Course>
                Iniciando com CodeIgniter - School of Net – C.H. 5h.
              </S.Course>
              <S.Course>
                Criando um site do zero com Wordpress - School of Net – C.H.
                16h.
              </S.Course>
              <S.Course>
                Criando API Rest com Wordpress – School of Net – C.H. 6h.
              </S.Course>
              <S.Course>
                Temas Avançados com Wordpress – School of Net – C.H. 7h.
              </S.Course>
              <S.Course>
                Criando API Rest com Wordpress – School of Net – C.H. 6h.
              </S.Course>
              <S.Course>
                Inovando com CSS – Fundação Bradesco – C.H. 26h.
              </S.Course>
              <S.Course>
                Introdução ao Git e ao GitHub Digital Innovation One – C.H. 5h.
              </S.Course>
              <S.Course>
                Linux: A Introdução ao Sistema Operacional – Digital Innovation
                One – C.H. 10h.
              </S.Course>
              <S.Course>TypeScript – COD3R – C.H. 11h.</S.Course>
              <S.Course>
                Inglês - Associação Brasil – América – ABA - fev/1994 a
                dez/1999.
              </S.Course>
              <S.Course>
                Inglês - Intermediate Conversation - BRITANIC - Internacional
                House – agosto a dez/ 2000.
              </S.Course>
              <S.Course>
                Inglês - Intermediate Conversation - BRITANIC - Internacional
                House – agosto a dez/ 2000.
              </S.Course>
              <S.Course>
                Francês – Alliance Française – Avançado Regular – 8º Estágio.
              </S.Course>
              <S.Course>
                Francês - Français Intermédiaire - Serviço Nacional de
                Aprendizagem Comercial - SENAC – PE - C.H. 170 h.
              </S.Course>
            </S.CoursesList>
          </S.Paragraph>
        </S.Content>
      </S.Container>
    </>
  );
}

export default Content;
