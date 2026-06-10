import React from 'react';
import { useTranslation } from 'react-i18next';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  // Função interna para mudar o idioma
  const alterarIdioma = (idioma) => {
    i18n.changeLanguage(idioma);
  };

  // Pegamos o idioma atual para saber qual botão destacar visualmente
  const idiomaAtual = i18n.language;

  return (
    <div className="language-switcher" style={{ display: 'flex', gap: '2px', float: 'right', fontFamily: 'monospace' }}>
      <button 
        onClick={() => alterarIdioma('pt')}
        style={{
          fontWeight: idiomaAtual === 'pt' ? 'bold' : 'normal',
          backgroundColor: idiomaAtual === 'pt' ? '#ddd' : '#fff',
          cursor: 'pointer',
          padding: '5px 10px',
        }}
        >
        <span>🇧🇷</span>  <span>pt</span>
      </button>
      
      <button 
        onClick={() => alterarIdioma('en')}
        style={{
          fontWeight: idiomaAtual === 'en' ? 'bold' : 'normal',
          backgroundColor: idiomaAtual === 'en' ? '#ddd' : '#fff',
          cursor: 'pointer',
          padding: '5px 10px',
        }}
      >
        <span>🇬🇧</span>  <span>en</span>
      </button>
    </div>
  );
}