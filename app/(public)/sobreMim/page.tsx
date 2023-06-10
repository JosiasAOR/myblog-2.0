import React from 'react';
import styles from './sobreMim.module.css';
// import profileImage from './profile.jpg';

export default function SobreMim() {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <div className={styles.profile}>
          {/* <img src={profileImage} alt="Josias Rodrigues" className={styles.profileImage} /> */}
          <div className={styles.socialLinks}>
            <a href="https://www.linkedin.com/in/seu-linkedin" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/seu-github" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
        <div>
          <h2 className={styles.h2}>Sobre Mim</h2>
          <p className={styles.p}>
            Olá! Sou Josias Rodrigues, um entusiasta da programação em busca de oportunidades desafiadoras no mercado. Meu objetivo é encontrar empresas inovadoras onde eu possa crescer profissionalmente.
          </p>
          <p className={styles.p}>
            Tenho habilidades em JavaScript, C++, React Native e front-end web (HTML, CSS, React.js). Além disso, sou experiente em controle de versão com GIT e análise de requisitos.
          </p>
          <p className={styles.p}>
            Minha experiência inclui gerenciamento de dados e arquivos como Assessor Administrativo, e entregas eficientes como Motoboy. Atualmente, estou desenvolvendo meu blog pessoal utilizando tecnologias como React, Node.js e Firebase.
          </p>
          <p className={styles.p}>
            Sou fluente em português e tenho conhecimentos básicos de inglês. Estou pronto para enfrentar novos desafios e contribuir para o sucesso do seu projeto. Entre em contato pelo e-mail josiasaor@gmail.com ou telefone (48)99977-1430.
          </p>
        </div>
      </div>
    </main>
  );
}
