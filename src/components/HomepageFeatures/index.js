import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

function HomepageFeature() {

  return (
    <body className={styles.appBody}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--6')}>
            <h1 className={styles.textTitle}>EDUCATION</h1>
            <h1 className={styles.styleHr}></h1>
            <p className={styles.textTitle2}>Bachelor Development And Systems Analysis</p>
            <p className={clsx(styles.textoCentro, styles.textSubtitle)}>University Senac Santo Amaro</p>
            <div className="row">
              <div className={clsx('col col--3')}>
                <img src="img/calendar.svg" className={styles.appLogoQuadrado} alt="logo" />
              </div>
              <div className={clsx('col col--3')}>
                <p className={clsx(styles.textoCentro, styles.textSubtitleGray)}>2018-2021</p>
              </div>
            </div>

            <hr></hr>
            <h1 className={styles.textTitle}>EXPERIENCE</h1>
            <h1 className={styles.styleHr}></h1>
            <p className={styles.textTitle2}>FrontEnd Junior</p>
            <p className={styles.textSubtitle}>Everis NTTDATA</p>
            <div className="row">
              <div className={clsx('col col--3')}>
                <img src="img/calendar.svg" className={styles.appLogoQuadrado} alt="logo" />
              </div>
              <div className={clsx('col col--3')}>
                <p className={styles.textSubtitleGray}>2018-2023</p>
              </div>
              <div className={clsx('col col--3')}>
                <img src="img/location.svg" className={styles.appLogoQuadrado} alt="logo" />
              </div>
              <div className={clsx('col col--3')}>
                <p className={styles.textSubtitleGray}>São Paulo</p>
              </div>
            </div>
            <div >

            </div>
            <hr></hr>

            <h1 className={styles.textTitle}>WORK GOALS</h1>
            <h1 className={styles.styleHr}></h1>
            <p className={styles.textTitle2}>
              ● Carreira em evolução na área de desenvolvimento de sistemas, com habilidade para atuar na parte de frontend em projetos desde 2018, utilizando o framework angular8+ visando a organização, qualidade das entregas e do trabalho prestado, pronto para atuar em projetos utilizando metodologias ágeis (SCRUM). </p>
            <h1 className={styles.styleHr}></h1>
            <h1 className={styles.textTitle}>SOFT SKILLS</h1>
            <h1 className={styles.styleHr}></h1>
            <p className={styles.textTitle2}>
              ● Com experiência em projetos internos na empresa e projetos nos clientes, Itau e Bradesco.
              Tive a oportunidade de trabalhar minhas habilidades sociais, lidando com o PO, equipes de QA, Backend, Mainframe, Bff e Design de telas.
              Também durante esse tempo no meu ultimo projeto ("Bradesco"), tive a oportunidade de interagir com o cliente em atividades cotidianas como reuniões e resolvendo objetivos com eficiência.
              Evoluindo a comunicação, empatia, escuta ativa e um bom relacionamento entre ambas as partes ! </p>
            <h1 className={styles.styleHr}></h1>
          </div>

          <div className={clsx('col col--6')}>
            <h1 className={styles.textTitle}>FIND ME ONLINE</h1>
            <div className={styles.styleHr}></div>

            <div className='row'>
              <div className={clsx('col col--2', styles.textoCentro)}>
                <img src="img/github.png" className={styles.appLogo} alt="logo" />
              </div>
              <div className={clsx('col col--2', styles.textoCentro)} >
                <a className={styles.textTitle2} href="https://github.com/Igornodari?tab=repositories"> GitHub</a>
              </div>
            </div>


            <div className='row'>
              <div className={clsx('col col--2', styles.textoCentro)}>
                <img src="img/linkedin.png" className={styles.appLogo} alt="logo" />
              </div>

              <div className={clsx('col col--2', styles.textoCentro)}>
                <a className={styles.textTitle2} href="https://www.linkedin.com/in/igor-leal-nodari-512b7914a/"> Linkedin</a>
              </div>
            </div>

            <hr></hr>

              <h1 className={styles.textTitle}>LANGUAGES</h1>
              <h1 className={styles.styleHr}></h1>
              <div className="row">
                <div className={clsx('col col--2', styles.textoCentro)}>
                  <p className={styles.textSubtitle}>Portuguese</p>
                  <p className={styles.textSubtitleGray}>Native</p>

                </div>
                <div className={clsx('col col--6', styles.textoCentro)}>
                  <p className={styles.bolaAmarela} alt="logo" />
                  <p className={styles.bolaAmarela} alt="logo" />
                  <p className={styles.bolaAmarela} alt="logo" />
                  <p className={styles.bolaAmarela} alt="logo" />
                  <p className={styles.bolaAmarela} alt="logo" />
                  <p className={styles.bolaAmarela} alt="logo" />
                </div>
              </div>
              <div className="row">
                <div className={clsx('col col--2', styles.textoCentro)}>
                  <p className={styles.textSubtitle}>English</p>
                  <p className={styles.textSubtitleGray}>Middle</p>
                </div>
                <div className={clsx('col col--6', styles.textoCentro)}>
                  <p className={styles.bolaAmarela} alt="logo" />
                  <p className={styles.bolaAmarela} alt="logo" />
                  <p className={styles.bolaAmarela} alt="logo" />
                  <p className={styles.bolaAmarela} alt="logo" />
                  <p className={styles.bolaPreta} alt="logo" />
                  <p className={styles.bolaPreta} alt="logo" />
                </div>
              </div>
              <div className="row">
                <div className={clsx('col col--2', styles.textoCentro)}>
                  <p className={styles.textSubtitle}>Espanhol</p>
                  <p className={styles.textSubtitleGray}>Low</p>
                </div>
                <div className={clsx('col col--6', styles.textoCentro)}>
                  <p className={styles.bolaAmarela} alt="logo" />
                  <p className={styles.bolaAmarela} alt="logo" />
                  <p className={styles.bolaAmarela} alt="logo" />
                  <p className={styles.bolaPreta} alt="logo" />
                  <p className={styles.bolaPreta} alt="logo" />
                  <p className={styles.bolaPreta} alt="logo" />
                </div>
              </div>
              <hr></hr>

            <h1 className={clsx(styles.textTitle)}>TECHNICAL SKILLS</h1>
            <div className={styles.marginL}>
              <h1 className={styles.styleHr}></h1>
              <div className="row">
                <div>
                  <p className={styles.textSubtitle} >HTML5</p>
                  <p className={styles.textSubtitle} >CSS (SCSS,CSS)</p>
                  <p className={styles.textSubtitle} >Git</p>
                  <p className={styles.textSubtitle} >Node.Js</p>
                  <p className={styles.textSubtitle} >Mongodb</p>
                  <p className={styles.textSubtitle} >FireBase</p>
                  <p className={styles.textSubtitle} >MySql</p>
                  <p className={styles.textSubtitle} >PostMan</p>
                  <p className={styles.textSubtitle} >Jira</p>
                  <p className={styles.textSubtitle} >Sass</p>
                  <p className={styles.textSubtitle} >Bootstrap</p>
                  <p className={styles.textSubtitle} >Ionic</p>
                </div>
                <div>
                  <p className={styles.textSubtitle} >React</p>
                  <p className={styles.textSubtitle} >Angular</p>
                  <p className={styles.textSubtitle} >Android</p>
                  <p className={styles.textSubtitle} >SpringMVC</p>
                  <p className={styles.textSubtitle} >Java</p>
                  <p className={styles.textSubtitle} >Kotlin</p>
                  <p className={styles.textSubtitle} >JavaScript</p>
                  <p className={styles.textSubtitle} >TypeScript</p>
                  <p className={styles.textSubtitle} >Jasmine</p>
                  <p className={styles.textSubtitle} >Bamboo</p>
                  <p className={styles.textSubtitle} >Angular Material</p>
                  <p className={styles.textSubtitle} >FlexBox</p>
                </div>
              </div>
              <hr></hr>
            </div>
          </div>
        </div>
      </div>
    </body>
  )

}

export default HomepageFeature