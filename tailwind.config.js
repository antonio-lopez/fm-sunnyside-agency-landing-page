module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        // PRIMARY
        softRed: 'hsl(7, 99%, 70%)',
        yellow: 'hsl(51, 100%, 49%)',
        //graphic design text
        darkDesaturatedCyan: 'hsl(167, 40%, 24%)',
        //photography text
        darkBlue: 'hsl(198, 62%, 26%)',
        //footer
        moderateCyan: 'hsl(167, 44%, 70%)',
        darkModerateCyan: 'hsl(168, 34%, 41%)',

        //NEUTRAL
        veryDarkDesaturatedBlue: 'hsl(212, 27%, 19%)',
        veryDarkGrayishBlue: 'hsl(213, 9%, 39%)',
        darkGrayishBlue: 'hsl(232, 10%, 55%)',
        grayishBlue: 'hsl(210, 4%, 67%)',
        white: 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        //Weights: 600
        'sans-serif': ['Barlow'],
        //Weights: 700, 900
        serif: ['Fraunces'],
      },
    },
  },
  plugins: [],
};
