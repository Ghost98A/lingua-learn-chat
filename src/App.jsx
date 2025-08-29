import { useState, useEffect } from 'react'
import LanguageSelector from './components/LanguageSelector'
import ChatInterface from './components/ChatInterface'
import ProgressTracker from './components/ProgressTracker'
import './App.css'

function App() {
  const [currentLanguage, setCurrentLanguage] = useState('')
  const [learningMode, setLearningMode] = useState('')
  const [showProgress, setShowProgress] = useState(false)
  const [messageCount, setMessageCount] = useState(0)
  const [showLanguageSelector, setShowLanguageSelector] = useState(true)

  // Load saved preferences
  useEffect(() => {
    const savedLanguage = localStorage.getItem('lingua-learn-language')
    const savedMode = localStorage.getItem('lingua-learn-mode')
    
    if (savedLanguage && savedMode) {
      setCurrentLanguage(savedLanguage)
      setLearningMode(savedMode)
      setShowLanguageSelector(false)
    }
  }, [])

  const handleLanguageSelect = (language) => {
    setCurrentLanguage(language)
    localStorage.setItem('lingua-learn-language', language)
  }

  const handleModeSelect = (mode) => {
    setLearningMode(mode)
    localStorage.setItem('lingua-learn-mode', mode)
    setShowLanguageSelector(false)
  }

  const handleLanguageSwitch = () => {
    setShowLanguageSelector(true)
    setMessageCount(0)
  }

  const handleShowProgress = () => {
    setShowProgress(true)
  }

  const handleCloseProgress = () => {
    setShowProgress(false)
  }

  // Count messages in chat (you'll need to pass this from ChatInterface)
  const handleMessageSent = () => {
    setMessageCount(prev => prev + 1)
  }

  if (showLanguageSelector) {
    return (
      <LanguageSelector 
        onLanguageSelect={handleLanguageSelect}
        onModeSelect={handleModeSelect}
      />
    )
  }

  return (
    <div className="app">
      <ChatInterface 
        currentLanguage={currentLanguage}
        learningMode={learningMode}
        onLanguageSwitch={handleLanguageSwitch}
        onMessageSent={handleMessageSent}
      />
      
      {/* Floating action button for progress */}
      <button className="progress-fab" onClick={handleShowProgress}>
        📊
      </button>

      {showProgress && (
        <ProgressTracker
          language={currentLanguage}
          mode={learningMode}
          messageCount={messageCount}
          onClose={handleCloseProgress}
        />
      )}
    </div>
  )
}

export default App
