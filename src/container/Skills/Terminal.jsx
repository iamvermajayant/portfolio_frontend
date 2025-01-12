import React from 'react';
import Console from 'react-console-emulator';

const Terminal = () => {
  const commands = {
    myhelp: {
      description: 'List all available commands',
      usage: 'myhelp',
      fn: () => {
        return `
Available commands:
- myhelp: List all available commands
- whoami: Display developer info
- skills: List technical skills
- projects: Show recent projects
- contact: Get contact information
        `;
      }
    },
    whoami: {
      description: 'Display developer info',
      usage: 'whoami',
      fn: () => {
        return 'Full-stack developer passionate about creating amazing web experiences';
      }
    },
    skills: {
      description: 'List technical skills',
      usage: 'skills',
      fn: () => {
        return `
🚀 Technical Skills:
- Frontend: React, Next.js, JavaScript
- Backend: Node.js, Express, MongoDB
- Tools: Git, Docker, AWS
        `;
      }
    },
    projects: {
      description: 'Show recent projects',
      usage: 'projects',
      fn: () => {
        return `
📂 Recent Projects:
1. E-commerce Platform
2. Social Media Dashboard
3. Portfolio Website
        `;
      }
    },
    contact: {
      description: 'Get contact information',
      usage: 'contact',
      fn: () => {
        return `
📫 Contact Information:
Email: developer@example.com
GitHub: github.com/developer
        `;
      }
    }
  };

  return (
    <div className="terminal-container" style={{ borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <div className="terminal-header" style={{
        background: '#2d3748',
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
        <div style={{
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          backgroundColor: '#fc6d26'
        }}></div>
        <div style={{
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          backgroundColor: '#fca326'
        }}></div>
        <div style={{
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          backgroundColor: '#3ecc5f'
        }}></div>
      </div>
      <Console
        commands={commands}
        welcomeMessage="Welcome to the developer terminal! Type 'myhelp' to see available commands."
        promptLabel="❯"
        style={{
          height: '400px',
          width: '100%',
          overflow: 'auto',
          backgroundColor: '#1a202c',
          fontFamily: 'Menlo, Monaco, "Courier New", monospace',
          fontSize: '14px',
          color: '#e2e8f0',
          borderRadius: '0px'
        }}
        contentStyle={{ padding: '20px' }}
        promptLabelStyle={{ color: '#48bb78' }}
        inputTextStyle={{ color: '#e2e8f0' }}
        messageStyle={{ color: '#e2e8f0' }}
        scrollBehavior="smooth"
        noDefaults={true}
      />
    </div>
  );
};

export default Terminal;




