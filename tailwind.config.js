/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        void: '#04040F',
        deep: '#08081A',
        surface: 'rgba(255,255,255,0.03)',
        cyan: {
          neon: '#00F5FF',
          glow: 'rgba(0,245,255,0.15)',
          dim: '#00B8C4',
        },
        magenta: {
          neon: '#FF0066',
          glow: 'rgba(255,0,102,0.15)',
          dim: '#C0004D',
        },
        purple: {
          neon: '#9400FF',
          glow: 'rgba(148,0,255,0.15)',
          dim: '#6A00B8',
        },
        gold: {
          neon: '#FFD700',
          glow: 'rgba(255,215,0,0.15)',
        },
      },
      fontFamily: {
        orbitron: ['Orbitron', 'monospace'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        mono: ['Share Tech Mono', 'monospace'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'scan-line': 'scanLine 3s linear infinite',
        'glitch': 'glitch 0.3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'border-glow': 'borderGlow 2s ease-in-out infinite',
        'data-stream': 'dataStream 20s linear infinite',
        'flicker': 'flicker 4s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '1', filter: 'brightness(1)' },
          '50%': { opacity: '0.8', filter: 'brightness(1.3)' },
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        glitch: {
          '0%, 100%': { clipPath: 'inset(0 0 98% 0)', transform: 'translate(-2px, 0)' },
          '33%': { clipPath: 'inset(33% 0 55% 0)', transform: 'translate(2px, 0)' },
          '66%': { clipPath: 'inset(78% 0 10% 0)', transform: 'translate(-2px, 0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        borderGlow: {
          '0%, 100%': { boxShadow: '0 0 10px #00F5FF, inset 0 0 10px rgba(0,245,255,0.1)' },
          '50%': { boxShadow: '0 0 25px #00F5FF, 0 0 50px rgba(0,245,255,0.3), inset 0 0 25px rgba(0,245,255,0.1)' },
        },
        dataStream: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        flicker: {
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': { opacity: '1' },
          '20%, 24%, 55%': { opacity: '0.4' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'neon-cyan': '0 0 20px rgba(0,245,255,0.5), 0 0 40px rgba(0,245,255,0.2)',
        'neon-magenta': '0 0 20px rgba(255,0,102,0.5), 0 0 40px rgba(255,0,102,0.2)',
        'neon-purple': '0 0 20px rgba(148,0,255,0.5), 0 0 40px rgba(148,0,255,0.2)',
        'glass': '0 8px 32px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
};
