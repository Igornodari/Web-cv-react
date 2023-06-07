
import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

function HomepageHeader() {
    return (
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
                  <div className="row">
                      <div className={clsx('col col--7', styles.appHeaderItens)}>
                          <img src="img/perfil.jpg" className={styles.appLogoNav} alt="logo" />
                          <h1 className={styles.textTitle}>IGOR LEAL NODARI</h1>
                          <p className={styles.textSubtitle}>Front-End Developer</p>
                      </div>
  
                      <div className={clsx('col col--4', styles.appHeaderItens)}>
                          <div className="row" >
                              <img src="img/email.png" className={styles.appLogo} alt="logo" />
                              <p className={styles.textoCentro}>igor.nods@gmail.com </p>
                          </div>
                          <div className="row">
                              <img src="img/whatsapp.png" className={styles.appLogo} alt="logo" />
                              <p className={styles.textoCentro}> +55(11) 94264-7380</p>
                          </div>
                      </div>
                  </div>
          </div>
      </header>
    );
  }
  export default HomepageHeader