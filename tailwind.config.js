module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors : {
        primary: '#F8C045',
        secondary: '#24836E',
        third : '#DF4D2A',
      },

    },
    fontFamily:{
      body: ['Quicksand']
    } 
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
