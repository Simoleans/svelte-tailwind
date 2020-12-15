module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: ['src/*.svelte', 'src/**/*.svelte'],
  theme: {
    extend: {
      colors: {
        dark: '#3b4363',
        score: '#2a46c0',
        'gray-outline': '#606e85'
      },
      width: {
        28: '7rem',
        36: '9rem'
      },
      height: {
        28: '7rem',
        36: '9rem'
      },
      boxShadow: {
        'inner-t': 'inset 0 8px rgba(0, 0, 0, 0.199)',
        'inner-b': 'inset 0 -8px rgba(0, 0, 0, 0.199)',
        win:
          '0 0 0 40px hsl(217, 16%, 45%, 0.05), 0 0 0 70px hsl(217, 16%, 45%, 0.08), 0 0 0 100px hsl(217, 16%, 45%, 0.1)'
      },
      gradientColorStops: theme => ({
        'scissors-primary': '#ec9e0e',
        'scissors-secondary': '#eca922',
        'paper-primary': '#4865f4',
        'paper-secondary': '#5671f5',
        'rock-primary': '#dc2e4e',
        'rock-secondary': '#dd405d',
        'lizard-primary': '#834fe3',
        'lizard-secondary': '#8c5de5',
        'cyan-primary': '#40b9ce',
        'cyan-secondary': '#52bed1',
        'radial-primary': '#1f3756',
        'radial-secondary': '#141539'
      })
    }
  },
  variants: {},
  plugins: []
};