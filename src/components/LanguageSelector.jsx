import React, { useState } from 'react';
import './LanguageSelector.css';

const LanguageSelector = ({ onLanguageSelect, onModeSelect }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedMode, setSelectedMode] = useState('');
  const [nativeLanguage, setNativeLanguage] = useState('English');

  const languages = [
    { code: 'spanish', name: 'Spanish', flag: '🇪🇸' },
    { code: 'french', name: 'French', flag: '🇫🇷' },
    { code: 'german', name: 'German', flag: '🇩🇪' },
    { code: 'italian', name: 'Italian', flag: '🇮🇹' },
    { code: 'portuguese', name: 'Portuguese', flag: '🇵🇹' },
    { code: 'japanese', name: 'Japanese', flag: '🇯🇵' },
    { code: 'korean', name: 'Korean', flag: '🇰🇷' },
    { code: 'chinese', name: 'Chinese', flag: '🇨🇳' },
    { code: 'russian', name: 'Russian', flag: '🇷🇺' },
    { code: 'arabic', name: 'Arabic', flag: '🇸🇦' },
  ];

  const learningModes = [
    {
      id: 'conversation',
      name: 'Free Conversation',
      description: 'Practice natural conversation with an AI tutor',
      icon: '💬'
    },
    {
      id: 'grammar',
      name: 'Grammar Correction',
      description: 'Get corrections and explanations for grammar mistakes',
      icon: '📝'
    },
    {
      id: 'vocabulary',
      name: 'Vocabulary Building',
      description: 'Learn new words and practice using them in context',
      icon: '📚'
    },
    {
      id: 'translation',
      name: 'Translation Practice',
      description: 'Practice translating between your native and target language',
      icon: '🔄'
    }
  ];

  const handleStartLearning = () => {
    if (selectedLanguage && selectedMode) {
      onLanguageSelect(selectedLanguage);
      onModeSelect(selectedMode);
    }
  };

  return (
    <div className="language-selector-container">
      <div className="selector-content">
        <div className="welcome-section">
          <h1>🌍 Lingua Learn Chat</h1>
          <p>Your AI-powered language learning companion</p>
        </div>

        <div className="selection-section">
          <div className="language-selection">
            <h2>Choose Your Target Language</h2>
            <div className="language-grid">
              {languages.map((language) => (
                <button
                  key={language.code}
                  className={`language-card ${selectedLanguage === language.code ? 'selected' : ''}`}
                  onClick={() => setSelectedLanguage(language.code)}
                >
                  <span className="flag">{language.flag}</span>
                  <span className="name">{language.name}</span>
                </button>
              ))}
            </div>
          </div>

          {selectedLanguage && (
            <div className="mode-selection">
              <h2>Select Learning Mode</h2>
              <div className="mode-grid">
                {learningModes.map((mode) => (
                  <button
                    key={mode.id}
                    className={`mode-card ${selectedMode === mode.id ? 'selected' : ''}`}
                    onClick={() => setSelectedMode(mode.id)}
                  >
                    <div className="mode-icon">{mode.icon}</div>
                    <div className="mode-info">
                      <h3>{mode.name}</h3>
                      <p>{mode.description}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {selectedLanguage && selectedMode && (
            <div className="native-language-selection">
              <h3>Native Language</h3>
              <select
                value={nativeLanguage}
                onChange={(e) => setNativeLanguage(e.target.value)}
                className="native-language-select"
              >
                <option value="English">English</option>
                <option value="Spanish">Español</option>
                <option value="French">Français</option>
                <option value="German">Deutsch</option>
                <option value="Portuguese">Português</option>
                <option value="Italian">Italiano</option>
                <option value="Japanese">日本語</option>
                <option value="Korean">한국어</option>
                <option value="Chinese">中文</option>
              </select>
            </div>
          )}

          {selectedLanguage && selectedMode && (
            <button
              className="start-learning-btn"
              onClick={handleStartLearning}
            >
              Start Learning {languages.find(l => l.code === selectedLanguage)?.name}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;