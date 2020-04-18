module.exports = {
  important: true,
  prefix: 'cl-',
  theme: {
    minWidth: {
      '0': '0',
      'popup': '350px',
      full: '100%'
    },
    extend: {
      zIndex: {
        '9999': 2147483647
      },
      borderRadius: {
        'large': '10px'
      },
      boxShadow: {
        '3xl': '0 60px 75px -10px rgba(0, 0, 0, .5)'
      },
      spacing: {
        'xxs': '2px',
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px'
      },
      lineHeight: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px'
      },
      maxHeight: {
        'default': '610px'
      },
      height: {
        'main': '510px',
        'tile': '80px',
      },
      maxWidth: {
        'default': '640px'
      },
      width: {
        'main': '640px',
        'tile': '550px',
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px'
      },
      textColor: {
        'primary': '#DDDDDD',
        'secondary': '#817F8E',
      },
      placeholderColor: {
        'primary': '#817F8E',
      },
      borderColor: theme => ({
        ...theme('colors'),
        'primary': '#817F8E',
        'tile': "#4299E1"
      }),
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': "#2D2D33",
        'secondary': "#37363C"
      }),
      fontFamily: {
        'sans': ['Helvetica']
      },
      fontSize: {
        'xs': '12px',
        'sm': '14px',
        'base': '16px',
        'lg': '18px',
        'xl': '20px'
      },
    }
  },
  variants: {},
  plugins: []
}

