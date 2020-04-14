module.exports = {
  important: "#kal-app",
  prefix: 'cl-',
  theme: {
    minWidth: {
      '0': '0',
      'popup': '350px',
      full: '100%'
    },
    extend: {
      zIndex: {
        '9999': 9999
      },
      width: {
        'main': '640px'
      },
      borderRadius: {
        'large': '10px'
      },
      maxHeight: {
        'default': '560px'
      },
      height: {
        'default': '560px'
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'default': "#2D2D33"
      }),
      boxShadow: {
        '3xl': '0 60px 75px -10px rgba(0, 0, 0, .5)'
      }
    }
  },
  variants: {},
  plugins: []
}

