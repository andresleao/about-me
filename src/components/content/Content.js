import * as S from './styled';
import { MdWork, MdTipsAndUpdates } from 'react-icons/md';
import { BsFillChatFill } from 'react-icons/bs';

function Content() {
  return (
    <>
      <S.Container>
        <S.Content>
          <S.TitleContainer>
            <BsFillChatFill
              size={30}
              color={'white'}
              style={{ marginLeft: '1rem' }}
            />
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

          <S.List>
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
              Criando APIs com NodeJs, Express, MongoDB e SQL - Udemy - C.H. 6h.
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
              Academia Java – Orientação a objeto; Banco de Dados JDBC e SQL com
              Oracle XE e JPA e Design Patterns (DAO); Java no mundo Web -
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
              Criando um site do zero com Wordpress - School of Net – C.H. 16h.
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
              Inglês - Associação Brasil – América – ABA - fev/1994 a dez/1999.
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
          </S.List>
        </S.Content>

        <S.Content>
          <S.TitleContainer>
            <MdWork size={30} color={'white'} style={{ marginLeft: '1rem' }} />
            <S.Title>Experiência</S.Title>
          </S.TitleContainer>
          <S.Subtitle>
            Estágio em Desenvolvimento Web Bisaweb Tecnologia da Informação
            <br />
            NOV 2020 - JUN 2021
          </S.Subtitle>
          <S.List>
            <S.Activities>
              Aplicação dos conhecimentos de PHP, Javascript, Jquery, HTML, CSS,
              Bootstrap, Banco de Dados MYSQL e Codeigniter.
            </S.Activities>
            <S.Activities>
              Desenvolvimento de soluções para o aprimoramento das
              funcionalidades do sistema Monetaweb.{' '}
            </S.Activities>
            <S.Activities>
              Corrigir problemas de frontend e backend do sistema.
            </S.Activities>
            <S.Activities>
              Criação de entidades e elementos utilizando o banco de dados
              MYSQL.
            </S.Activities>
            <S.Activities>
              Participação das reuniões de abertura e fechamento das sprints com
              a metodologia ágil Scrum.
            </S.Activities>
            <S.Activities>
              Gerenciamento do backlog das aplicações utilizando a ferramenta
              Mantis Bug Tracker.
            </S.Activities>
            <S.Activities>
              Utilização do Sourcetree como interface gráfica para o repositório
              do sistema.
            </S.Activities>
          </S.List>

          <S.Subtitle>
            Estágio em Engenharia Civil Sindicado da Construção Civil de
            Pernambuco – SINDUSCON/PE
            <br />
            Jul 2017 - Nov 2018
          </S.Subtitle>
          <S.List>
            <S.Activities>
              Levantamento do quantitativo de serviços, por meio de plantas no
              formato dwg (AutoCAD).
            </S.Activities>
            <S.Activities>
              Elaboração de planilhas digitais no Excel, para registro da
              evolução das atividades referentes à mão de obra, em campo.
            </S.Activities>
            <S.Activities>
              Apropriação de obras em Recife com utilização da metodologia
              SINAPI.
            </S.Activities>
            <S.Activities>
              Análise da produtividade da mão de obra.
            </S.Activities>
          </S.List>

          <S.Subtitle>
            Estágio em Engenharia Civil Matos Oliveira Engenharia
            <br />
            Fev 2017 - Mai 2017
          </S.Subtitle>
          <S.List>
            <S.Activities>
              Acompanhamento do serviço de recuperação de ferragens.
            </S.Activities>
            <S.Activities>
              Supervisão de manutenção da manta impermeabilizante de áreas
              molhadas.
            </S.Activities>
            <S.Activities>
              Acompanhamento da manutenção, limpeza e troca de revestimento
              cerâmico de edificações.
            </S.Activities>
            <S.Activities>
              Verificação do serviço de pintura das estruturas recuperadas.
            </S.Activities>
            <S.Activities>
              Administração e registro dos materiais nas obras
            </S.Activities>
          </S.List>
        </S.Content>
      </S.Container>
    </>
  );
}

export default Content;
