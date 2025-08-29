import React, { useState, useEffect } from 'react';
import './ProgressTracker.css';

const ProgressTracker = ({ language, mode, messageCount, onClose }) => {
  const [stats, setStats] = useState({
    sessionsToday: 1,
    totalMessages: 0,
    wordsLearned: 0,
    streakDays: 1,
    averageSessionLength: 0
  });

  useEffect(() => {
    // Simulate loading stats from localStorage or API
    const savedStats = JSON.parse(localStorage.getItem('lingua-learn-stats')) || {
      sessionsToday: 1,
      totalMessages: 0,
      wordsLearned: 0,
      streakDays: 1,
      averageSessionLength: 0
    };
    
    // Update with current session data
    const updatedStats = {
      ...savedStats,
      totalMessages: savedStats.totalMessages + messageCount,
      wordsLearned: savedStats.wordsLearned + Math.floor(messageCount * 1.5), // Rough estimate
      averageSessionLength: Math.round((savedStats.averageSessionLength + messageCount) / 2)
    };
    
    setStats(updatedStats);
    localStorage.setItem('lingua-learn-stats', JSON.stringify(updatedStats));
  }, [messageCount]);

  const achievements = [
    {
      id: 'first_chat',
      name: 'First Steps',
      description: 'Started your first conversation',
      icon: '🎯',
      unlocked: messageCount > 0
    },
    {
      id: 'five_messages',
      name: 'Getting Warmed Up',
      description: 'Sent 5 messages in a session',
      icon: '🔥',
      unlocked: messageCount >= 5
    },
    {
      id: 'ten_messages',
      name: 'Conversation Master',
      description: 'Sent 10 messages in a session',
      icon: '⭐',
      unlocked: messageCount >= 10
    },
    {
      id: 'dedicated_learner',
      name: 'Dedicated Learner',
      description: 'Used the app for multiple sessions',
      icon: '🏆',
      unlocked: stats.sessionsToday > 1
    }
  ];

  const getMotivationalMessage = () => {
    const messages = [
      "Keep up the great work! Every conversation makes you better.",
      "You're making excellent progress in your language journey!",
      "Consistency is key - you're building a great habit!",
      "Your fluency is improving with each conversation.",
      "Great job staying committed to learning!"
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  };

  return (
    <div className="progress-overlay">
      <div className="progress-modal">
        <div className="progress-header">
          <h2>📊 Your Learning Progress</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <div className="progress-content">
          <div className="motivation-section">
            <div className="motivation-message">
              <span className="motivation-icon">🌟</span>
              <p>{getMotivationalMessage()}</p>
            </div>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">📈</div>
              <div className="stat-info">
                <div className="stat-number">{stats.totalMessages}</div>
                <div className="stat-label">Total Messages</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">📚</div>
              <div className="stat-info">
                <div className="stat-number">{stats.wordsLearned}</div>
                <div className="stat-label">Words Practiced</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">🔥</div>
              <div className="stat-info">
                <div className="stat-number">{stats.streakDays}</div>
                <div className="stat-label">Day Streak</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">💬</div>
              <div className="stat-info">
                <div className="stat-number">{stats.averageSessionLength}</div>
                <div className="stat-label">Avg. Messages/Session</div>
              </div>
            </div>
          </div>

          <div className="current-session">
            <h3>Current Session</h3>
            <div className="session-info">
              <div className="session-detail">
                <span className="label">Language:</span>
                <span className="value">{language}</span>
              </div>
              <div className="session-detail">
                <span className="label">Mode:</span>
                <span className="value">{mode}</span>
              </div>
              <div className="session-detail">
                <span className="label">Messages:</span>
                <span className="value">{messageCount}</span>
              </div>
            </div>
          </div>

          <div className="achievements-section">
            <h3>🏆 Achievements</h3>
            <div className="achievements-grid">
              {achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className={`achievement ${achievement.unlocked ? 'unlocked' : 'locked'}`}
                >
                  <div className="achievement-icon">{achievement.icon}</div>
                  <div className="achievement-info">
                    <div className="achievement-name">{achievement.name}</div>
                    <div className="achievement-description">{achievement.description}</div>
                  </div>
                  {achievement.unlocked && (
                    <div className="achievement-badge">✓</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="progress-bar-section">
            <h3>Session Progress</h3>
            <div className="progress-bar">
              <div 
                className="progress-fill"
                style={{ width: `${Math.min((messageCount / 15) * 100, 100)}%` }}
              ></div>
            </div>
            <p className="progress-text">
              {messageCount < 15 ? 
                `${15 - messageCount} more messages to complete this session!` : 
                'Session complete! Great job!'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;