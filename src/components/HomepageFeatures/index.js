import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

function HomepageFeature() {

  return (
    <body className={styles.appBody}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--6', styles.noPadding)}>

            <h1 className={styles.textTitle}>EDUCATION</h1>
            <h1 className={styles.styleHr}></h1>
            <p className={styles.textTitle2}>Bachelor Development And Systems Analysis</p>
            <p className={clsx(styles.textoCentro, styles.textSubtitle)}>University Senac Santo Amaro</p>

            <div className={clsx('row')}>
              <div className={clsx('col col--3')}>
                <img src="img/calendar.svg" className={styles.appLogoQuadrado} alt="logo" />
              </div>
              <div className={clsx('col col--3')}>
                <p className={clsx(styles.textoCentro, styles.textSubtitleGray)}>2019-2023</p>
              </div>
            </div>
            <hr></hr>

            <h1 className={styles.textTitle}>EXPERIENCE</h1>
            <h1 className={styles.styleHr}></h1>
            <p className={styles.textTitle2}>Estagiario</p>
            <p className={styles.textSubtitle}>Everis</p>
            <div className="row">

              <div className={clsx('col col--3')}>
                <img src="img/calendar.svg" className={styles.appLogoQuadrado} alt="logo" />
              </div>
              <div className={clsx('col col--3')}>
                <p className={styles.textSubtitleGray}>2018-2020</p>
              </div>
              <div className={clsx('col col--3')}>
                <img src="img/location.svg" className={styles.appLogoQuadrado} alt="logo" />
              </div>
              <div className={clsx('col col--3')}>
                <p className={styles.textSubtitleGray}>São Paulo</p>
              </div>
            </div>

   <hr></hr>
            <p className={styles.textTitle2}>FrontEnd Junior</p>
            <p className={styles.textSubtitle}>Everis</p>
            <div className="row">

              <div className={clsx('col col--3')}>
                <img src="img/calendar.svg" className={styles.appLogoQuadrado} alt="logo" />
              </div>
              <div className={clsx('col col--3')}>
                <p className={styles.textSubtitleGray}>2020-2021</p>
              </div>
              <div className={clsx('col col--3')}>
                <img src="img/location.svg" className={styles.appLogoQuadrado} alt="logo" />
              </div>
              <div className={clsx('col col--3')}>
                <p className={styles.textSubtitleGray}>São Paulo</p>
              </div>
            </div>

            <hr></hr>
            <p className={styles.textTitle2}>FrontEnd Junior N2</p>
            <p className={styles.textSubtitle}>NTTDATA</p>
            <div className="row">

              <div className={clsx('col col--3')}>
                <img src="img/calendar.svg" className={styles.appLogoQuadrado} alt="logo" />
              </div>
              <div className={clsx('col col--3')}>
                <p className={styles.textSubtitleGray}>2021-2023</p>
              </div>
              <div className={clsx('col col--3')}>
                <img src="img/location.svg" className={styles.appLogoQuadrado} alt="logo" />
              </div>
              <div className={clsx('col col--3')}>
                <p className={styles.textSubtitleGray}>São Paulo</p>
              </div>
            </div>
            <hr></hr>
            <h1 className={styles.textTitle}>WORK GOALS</h1>
            <h1 className={styles.styleHr}></h1>
            <p className={styles.textTitle2}>
              ● Carreira em evolução na área de desenvolvimento de sistemas, com habilidade para atuar na parte de frontend em projetos desde 2018, utilizando o framework angular8+ visando a organização, qualidade das entregas e do trabalho prestado, pronto para atuar em projetos utilizando metodologias ágeis (SCRUM). </p>
            <hr></hr>
            <h1 className={styles.textTitle}>SOFT SKILLS</h1>
            <h1 className={styles.styleHr}></h1>
            <p className={styles.textTitle2}>
              ● Com experiência em projetos SCRUM nos clientes, Itau e Bradesco.
              Tive a oportunidade de trabalhar minhas habilidades sociais, lidando com o PO, Gerentes, Techleads e equipes de QA, Backend, Mainframe, Bff e Design de telas(UX).
              Também durante esse tempo, no meu ultimo projeto ("Bradesco"), tive a oportunidade de interagir com o cliente em atividades cotidianas como reuniões, ritos e cerimonias da metodologia SCRUM e resolvendo objetivos com eficiência, sempre trabalhando em grupo com proatividade e comprometimento
              Evoluindo a comunicação, empatia, escuta ativa e um bom relacionamento entre ambas as partes !
              </p>
              <hr></hr>

              <h1 className={styles.textTitle}>SOFT SKILLS COURSES</h1>
              <h1 className={styles.styleHr}></h1>
              <div className="row">
              <div className={clsx('col col--6', styles.noPadding)}>
                <p className={styles.textSubtitle} >Comunicação Positiva</p>
                <p className={styles.textSubtitle} >Mapas Mentais</p>
                <p className={styles.textSubtitle} >Lei Geral de proteção de dados</p>
                <p className={styles.textSubtitle} >Gestão da Tensão e inteligencia emocional</p>
                <p className={styles.textSubtitle} >Conceitos basicos de segurança</p>
                <p className={styles.textSubtitle} >Formação global de complience</p>
                <p className={styles.textSubtitle} >GDPR</p>
                <p className={styles.textSubtitle} >Comunicação em equipes</p>
              </div>
              </div>
              
            <h1 className={styles.styleHr}></h1>
          </div>

          <div className={clsx('col col--6', styles.noPadding)}>

            <h1 className={styles.textTitle}>FIND ME ONLINE</h1>
            <div className={styles.styleHr}></div>

            <div className='row'>

              <div className={clsx('col col--3', styles.textoCentro,styles.paddingItems)}>
                <img src="img/github.png" className={styles.appLogo} alt="logo" />
              </div>

              <div className={clsx('col col--3', styles.textoCentro,styles.paddingItems)} >
                <a className={styles.textSubTitle2} href="https://github.com/Igornodari?tab=repositories"> GitHub</a>
              </div>
            </div>

            <div className='row'>
              <div className={clsx('col col--3', styles.textoCentro,styles.paddingItems)}>
                <img src="img/linkedin.png" className={styles.appLogo} alt="logo" />
              </div>

              <div className={clsx('col col--3', styles.textoCentro,styles.paddingItems)}>
                <a className={styles.textSubTitle2} href="https://www.linkedin.com/in/igor-leal-nodari-512b7914a/"> Linkedin</a>
              </div>
            </div>

            <hr></hr>

            <h1 className={styles.textTitle}>LANGUAGES</h1>
            <h1 className={styles.styleHr}></h1>

            <div className="row">
              <div className={clsx('col col--3')}>
                <p className={styles.textSubtitle}>Portuguese</p>
                <p className={styles.textSubtitleGray}>Native</p>
              </div>

              <div className={clsx('col col--9')}>
                <p className={styles.bolaAmarela} alt="logo" />
                <p className={styles.bolaAmarela} alt="logo" />
                <p className={styles.bolaAmarela} alt="logo" />
                <p className={styles.bolaAmarela} alt="logo" />
                <p className={styles.bolaAmarela} alt="logo" />
                <p className={styles.bolaAmarela} alt="logo" />
              </div>
            </div>

            <div className="row">
              <div className={clsx('col col--3')}>
                <p className={styles.textSubtitle}>English</p>
                <p className={styles.textSubtitleGray}>Middle</p>
              </div>
              <div className={clsx('col col--6')}>
                <p className={styles.bolaAmarela} alt="logo" />
                <p className={styles.bolaAmarela} alt="logo" />
                <p className={styles.bolaAmarela} alt="logo" />
                <p className={styles.bolaAmarela} alt="logo" />
                <p className={styles.bolaPreta} alt="logo" />
                <p className={styles.bolaPreta} alt="logo" />
              </div>
            </div>

            <div className="row">
              <div className={clsx('col col--3')}>
                <p className={styles.textSubtitle}>Espanhol</p>
                <p className={styles.textSubtitleGray}>Low</p>
              </div>
              <div className={clsx('col col--6')}>
                <p className={styles.bolaAmarela} alt="logo" />
                <p className={styles.bolaAmarela} alt="logo" />
                <p className={styles.bolaAmarela} alt="logo" />
                <p className={styles.bolaPreta} alt="logo" />
                <p className={styles.bolaPreta} alt="logo" />
                <p className={styles.bolaPreta} alt="logo" />
              </div>
            </div>

            <hr></hr>

            <h1 className={styles.textTitle}>TECHNICAL SKILLS</h1>
            <h1 className={styles.styleHr}></h1>

            <div className="row">
              <div className={clsx('col col--6', styles.noPadding)}>
                <p className={styles.textSubtitle} >HTML5</p>
                <p className={styles.textSubtitle} >CSS (SCSS)</p>
                <p className={styles.textSubtitle} >Git</p>
                <p className={styles.textSubtitle} >Node.Js</p>
                <p className={styles.textSubtitle} >Mongodb</p>
                <p className={styles.textSubtitle} >FireBase</p>
                <p className={styles.textSubtitle} >MySql</p>
                <p className={styles.textSubtitle} >PostMan</p>
                <p className={styles.textSubtitle} >Jira</p>
                <p className={styles.textSubtitle} >Bitbucket</p>
                <p className={styles.textSubtitle} >Sass</p>
                <p className={styles.textSubtitle} >Bootstrap</p>
                <p className={styles.textSubtitle} >Ionic</p>
                <p className={styles.textSubtitle} >Confluence</p>
                <p className={styles.textSubtitle} >i18n</p>
                <p className={styles.textSubtitle} >Api rest</p>

              </div>
              <div className={clsx('col col--6', styles.noPadding)}>
                <p className={styles.textSubtitle} >React</p>
                <p className={styles.textSubtitle} >Angular</p>
                <p className={styles.textSubtitle} >Android</p>
                <p className={styles.textSubtitle} >SpringMVC</p>
                <p className={styles.textSubtitle} >Java</p>
                <p className={styles.textSubtitle} >AdobeXD</p>
                <p className={styles.textSubtitle} >Zeplin</p>
                <p className={styles.textSubtitle} >Kotlin</p>
                <p className={styles.textSubtitle} >JavaScript</p>
                <p className={styles.textSubtitle} >TypeScript</p>
                <p className={styles.textSubtitle} >Jasmine</p>
                <p className={styles.textSubtitle} >Bamboo</p>
                <p className={styles.textSubtitle} >Angular Material</p>
                <p className={styles.textSubtitle} >FlexBox</p>
                <p className={styles.textSubtitle} >Micro-Frontend</p>
                <p className={styles.textSubtitle} >Componentização</p>
              </div>
            </div>

            <hr></hr>
            <h1 className={styles.textTitle}>TECHNICAL SKILLS COURSES</h1>
            <h1 className={styles.styleHr}></h1>

            <div className="row">
              <div className={clsx('col col--6', styles.noPadding)}>
                <p className={styles.textSubtitle} >Udemy</p>
                <p className={styles.textSubtitle} >Desenvolvimento Android java</p>
                <p className={styles.textSubtitle} >Alura</p>
                <p className={styles.textSubtitle} >Desenvolvimento Android kotlin.</p>
                <p className={styles.textSubtitle} >Alura</p>
                <p className={styles.textSubtitle} >Formação Angular 7+</p>
              </div>
          </div>
          <h1 className={styles.styleHr}></h1>
          </div>
        </div>
      </div>
    </body>
  )

}

export default HomepageFeature