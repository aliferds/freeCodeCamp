import React, { useTransition } from 'react'
import PageFrame from './components/PageFrame'
import { projects } from './data/projects'
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './components/LanguageSwitcher';

function App() {

  const { t } = useTranslation();
  const anoAtual = new Date().getFullYear();

  return (
    <>
      <header style={{ padding: '20px' }}>
        {/* Botões de controle de Idioma */}
        <LanguageSwitcher/>

        {/* Textos dinâmicos baseados no JSON */}
        <h1 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '10px', 
            margin: 0 
            }}
        >
          <span role="img" aria-label="camp" style={{position: 'relative', top: '-0.25rem'}}>⛺</span> 
          {t('welcome')}
        </h1>
        <p style={{ marginTop: '5px', color: '#666' }}>{t('sidebar_title')}</p>
      </header>
      <main></main>
      <footer style={styles.footer}>
        <div style={styles.container}>
          <small style={styles.copyright}>
            &copy; {anoAtual} BaseCamp. {t('footer.rights')}
          </small>

          <nav aria-label="Footer Navigation">
            <ul style={styles.linkList}>
              <li>
                <a 
                  href="https://github.com/aliferds" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={styles.link}
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://www.freecodecamp.org/alfds" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={styles.link}
                >
                  freeCodeCamp
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
}

// Estilos simples inline para manter o componente auto-contido
const styles = {
  footer: {
    backgroundColor: '#1b1b32', // Cor escura clássica do freeCodeCamp (opcional)
    color: '#ffffff',
    padding: '20px 0',
    marginTop: 'auto', // Joga o footer para o final da página se usado com flexbox no App.jsx
    borderTop: '1px solid #3b3b4f',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    flexWrap: 'wrap',
    gap: '10px',
  },
  copyright: {
    fontSize: '0.9rem',
    color: '#d0d0d5',
  },
  linkList: {
    display: 'flex',
    listStyle: 'none',
    gap: '20px',
    padding: 0,
    margin: 0,
  },
  link: {
    color: '#ff8800',
    textDecoration: 'none',
    fontSize: '0.9rem',
    transition: 'color 0.2s',
  }
};

export default App