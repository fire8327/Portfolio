module.exports = {
    mode: 'jit',
    purge: {
      content: [
        './components/**/*.{vue,js}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './app.vue',
      ],
      options: {
        safelist: ['dark', 'animate-text', 'scroll']
      }
    },
    theme: {
      extend: {
        colors: {
          'light-bg': '#f9f9f9',
          'dark-bg': '#131313',
          'light-text': '#f9f9f9',
          'dark-text': '#131313',
          'purple': 'rgb(123, 31, 162)',
          'violet': 'rgb(103, 58, 183)',
          'pink': 'rgb(244, 143, 177)'
        },
        spacing: {
          'widthContent': '1280px',
          'widthContentMargin': '16px'
        },
        backgroundImage: {
          'gradient-brand': 'linear-gradient(to right, #ec4899, #8b5cf6)'
        }
      }
    }
  }