# 🌍 Lingua Learn Chat

An AI-powered language learning chat application built with React and Vite. Practice conversations in multiple languages with intelligent tutoring assistance.

## ✨ Features

### 🗣️ Multi-Language Support
- **10 Languages**: Spanish, French, German, Italian, Portuguese, Japanese, Korean, Chinese, Russian, Arabic
- **Native Language Selection**: Configure your native language for better context
- **Smart Language Switching**: Easily switch between target languages

### 🎯 Learning Modes
- **Free Conversation**: Natural conversation practice with AI tutor
- **Grammar Correction**: Get real-time grammar corrections and explanations
- **Vocabulary Building**: Learn new words and practice using them in context
- **Translation Practice**: Practice translating between languages

### 📊 Progress Tracking
- **Session Statistics**: Track messages sent, words learned, and session length
- **Achievement System**: Unlock achievements as you progress
- **Streak Tracking**: Maintain learning streaks for motivation
- **Progress Visualization**: Visual progress bars and statistics

### 💬 Smart Chat Interface
- **Real-time Messaging**: Instant AI responses with typing indicators
- **Message History**: Full conversation history within sessions
- **Responsive Design**: Works perfectly on desktop and mobile
- **Accessibility**: Full keyboard navigation and screen reader support

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or bun

### Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   - Navigate to `http://localhost:5173`
   - Select your target language and learning mode
   - Start practicing!

### Build for Production

```bash
npm run build
npm run preview
```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── ChatInterface.jsx       # Main chat component
│   ├── LanguageSelector.jsx    # Language & mode selection
│   └── ProgressTracker.jsx     # Progress tracking modal
├── App.jsx                     # Main application component
├── main.jsx                    # React entry point
└── index.css                   # Global styles
```

## 🎨 Design Features

### Visual Design
- **Modern Gradient UI**: Beautiful gradient backgrounds and buttons
- **Card-based Layout**: Clean, modern card interfaces
- **Smooth Animations**: Subtle animations and transitions
- **Mobile-First**: Responsive design that works on all devices

### User Experience
- **Persistent Settings**: Language preferences saved locally
- **Quick Access**: Floating action button for progress tracking
- **Intuitive Navigation**: Clear visual hierarchy and navigation
- **Feedback Systems**: Visual feedback for all user actions

## 🧠 AI Teaching System

The app simulates intelligent language tutoring with:

### Conversation Mode
- Natural conversation starters
- Follow-up questions to encourage discussion
- Context-aware responses

### Grammar Correction
- Identifies common grammar mistakes
- Provides corrected versions with explanations
- Encouraging feedback for improvements

### Vocabulary Building
- Introduces new words in context
- Asks for synonyms and alternative usage
- Reinforces learning through repetition

### Translation Practice
- Suggests alternative translations
- Considers cultural context
- Provides natural language alternatives

## 🔧 Technology Stack

- **Frontend**: React 19 with Hooks
- **Build Tool**: Vite 7
- **Styling**: CSS3 with modern features
- **Storage**: localStorage for persistence
- **Icons**: Unicode emojis for universal support

## 📱 Responsive Design

The app is fully responsive and optimized for:
- **Desktop**: Full-featured experience with all components visible
- **Tablet**: Optimized layout with touch-friendly controls
- **Mobile**: Streamlined interface with mobile-specific optimizations

## 🌟 Future Enhancements

Potential features for future versions:
- Real AI integration with language models
- Voice recognition and speech synthesis
- Spaced repetition flashcard system
- Multi-user conversation practice
- Progress synchronization across devices
- Advanced grammar analysis
- Cultural context lessons

## 🤝 Contributing

This is a learning project, but contributions are welcome! Areas for improvement:
- Additional language support
- More sophisticated AI responses
- Enhanced progress tracking
- Accessibility improvements
- Performance optimizations

## 📄 License

This project is open source and available under the MIT License.
