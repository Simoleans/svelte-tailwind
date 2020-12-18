module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: ['src/*.svelte', 'src/**/*.svelte'],
  // purge: { purge manual
  //   enabled: true,
  //   content : ['src/*.svelte', 'src/**/*.svelte'],
  // },
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
      }
    }
  },
  variants: {},
  plugins: []
};