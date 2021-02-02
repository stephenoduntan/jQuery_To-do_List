module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height : {
        'min' : 'min-content',
        'max' : 'max-content'
      },
      minWidth : {
        '1/4' : '25%'
      },
      backgroundImage : {
        'dim' : 'linear-gradient(0deg, rgba(0, 0, 0, 0.15),rgba(0, 0, 0, 0.15))'
      },
      borderWidth : {
        '3' : '3px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
