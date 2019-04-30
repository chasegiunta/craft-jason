let defaultConfig = require('tailwindcss/defaultConfig')()

let scale = {
  auto: 'auto',
  '0': '0px',
  px: '1px',
  // '1': '0.25rem',
  // '2': '0.5rem',
  // '3': '0.75rem',
  // '4': '1rem',
  // '5': '1.25rem',
  // '6': '1.5rem',
  // '8': '2rem',
  // '10': '2.5rem',
  // '12': '3rem',
  // '16': '4rem',
  // '24': '6rem',
  // '32': '8rem',
  // '48': '12rem',
  // '64': '16rem',
  '1/2': '50%',
  '1/3': '33.33333%',
  '2/3': '66.66667%',
  '1/4': '25%',
  '3/4': '75%',
  '1/5': '20%',
  '2/5': '40%',
  '3/5': '60%',
  '4/5': '80%',
  '1/6': '16.66667%',
  '5/6': '83.33333%',
  full: '100%',

  '3px': '3px',
  '5px': '5px',
  '8px': '8px',
  '10px': '10px',
  '15px': '15px',
  '18px': '18px',
  '20px': '20px',
  '25px': '25px',
  '30px': '30px',
  '35px': '35px',
  '40px': '40px',
  '50px': '50px',
  '75px': '75px',
  '100px': '100px',
  '125px': '125px',
  '150px': '150px',
  '175px': '175px',
  '200px': '200px',
  '250px': '250px',
  '300px': '300px',
}

let colors = {
  transparent: 'transparent',

  // Brand colors
  'orange-dark': 'rgb(198, 89, 40)',
  orange: 'rgb(240, 99, 32)',

  // Social networks
  'twitter-blue': '#1da1f2',
  'facebook-blue': '#3b5998',
  'pinterest-red': '#bd081c',
  'instagram-purple': '#c13584',
  'linkedin-blue': '#0077b5',
  'googleplus-red': '#dd4b39',

  // Black & White
  'black-full': '#000',
  black: '#22292f',
  white: '#ffffff',

  'blue-darkest': '#12283a',
  'blue-darker': '#1c3d5a',
  'blue-dark': '#2779bd',
  blue: '#3490dc',
  'blue-light': '#6cb2eb',
  'blue-lighter': '#bcdefa',
  'blue-lightest': '#eff8ff',

  'red-darkest': '#3b0d0c',
  'red-darker': '#621b18',
  'red-dark': '#cc1f1a',
  red: '#e3342f',
  'red-light': '#ef5753',
  'red-lighter': '#f9acaa',
  'red-lightest': '#fcebea',

  // Greys
  'grey-darkest': '#3d4852',
  'grey-darker': '#606f7b',
  'grey-dark': '#8795a1',
  grey: '#b8c2cc',
  'grey-light': '#dae1e7',
  'grey-lighter': '#f1f5f8',
  'grey-lightest': '#f8fafc',
}

module.exports = {
  colors: colors,

  screens: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },

  fonts: {
    sans: [
      'system-ui',
      'BlinkMacSystemFont',
      '-apple-system',
      'Segoe UI',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      'sans-serif',
    ],
    serif: [
      'Constantia',
      'Lucida Bright',
      'Lucidabright',
      'Lucida Serif',
      'Lucida',
      'DejaVu Serif',
      'Bitstream Vera Serif',
      'Liberation Serif',
      'Georgia',
      'serif',
    ],
    mono: [
      'Menlo',
      'Monaco',
      'Consolas',
      'Liberation Mono',
      'Courier New',
      'monospace',
    ],
  },

  textSizes: {
    xs: '.75rem', // 12px
    sm: '.875rem', // 14px
    base: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
    '2xl': '1.5rem', // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem', // 48px
  },

  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },

  leading: {
    '0': 0,
    none: 1,
    tight: 1.25,
    normal: 1.5,
    loose: 2,
  },

  tracking: {
    tight: '-0.05em',
    normal: '0',
    wide: '0.05em',
  },

  textColors: colors,

  backgroundColors: colors,

  backgroundSize: {
    auto: 'auto',
    cover: 'cover',
    contain: 'contain',
  },

  borderWidths: {
    default: '1px',
    '0': '0',
    '2': '2px',
    '4': '4px',
    '8': '8px',
  },

  borderColors: global.Object.assign(
    {
      default: colors['grey-light'],
    },
    colors,
  ),

  borderRadius: {
    none: '0',
    sm: '.125rem',
    default: '.25rem',
    lg: '.5rem',
    full: '9999px',
  },

  width: {
    ...scale,
    screen: '100vw',
  },

  height: {
    ...scale,
    screen: '100vh',
  },

  minWidth: {
    ...scale,
    '2xs': '10rem',
    xs: '20rem',
    sm: '30rem',
    md: '40rem',
    lg: '50rem',
    xl: '60rem',
    '2xl': '70rem',
    '3xl': '80rem',
    '4xl': '90rem',
    '5xl': '100rem',
    screen: '100vw',
  },

  minHeight: {
    ...scale,
    '2xs': '10rem',
    xs: '20rem',
    sm: '30rem',
    md: '40rem',
    lg: '50rem',
    xl: '60rem',
    '2xl': '70rem',
    '3xl': '80rem',
    '4xl': '90rem',
    '5xl': '100rem',
    screen: '100vh',
  },

  maxWidth: {
    ...scale,
    '2xs': '10rem',
    xs: '20rem',
    sm: '30rem',
    md: '40rem',
    lg: '50rem',
    xl: '60rem',
    '2xl': '70rem',
    '3xl': '80rem',
    '4xl': '90rem',
    '5xl': '100rem',
    screen: '100vw',
  },

  maxHeight: {
    ...scale,
    '2xs': '10rem',
    xs: '20rem',
    sm: '30rem',
    md: '40rem',
    lg: '50rem',
    xl: '60rem',
    '2xl': '70rem',
    '3xl': '80rem',
    '4xl': '90rem',
    '5xl': '100rem',
    screen: '100vh',
  },

  padding: {
    ...scale,
  },

  margin: {
    ...scale,
  },

  negativeMargin: {
    ...scale,
  },

  shadows: {
    default: '0 2px 4px 0 rgba(0,0,0,0.10)',
    md: '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)',
    lg: '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
    inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
    outline: 'inset 0 0 0 1px #0D99F2',
    none: 'none',
  },

  zIndex: {
    auto: 'auto',
    '0': 0,
    '10': 10,
    '20': 20,
    '30': 30,
    '40': 40,
    '50': 50,
  },

  opacity: {
    '0': '0',
    '25': '.25',
    '50': '.5',
    '75': '.75',
    '100': '1',
  },

  svgFill: {
    current: 'currentColor',
  },

  svgStroke: {
    current: 'currentColor',
  },

  modules: {
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundColors: ['responsive', 'hover', 'focus'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderCollapse: [],
    borderColors: ['responsive', 'hover', 'focus'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidths: ['responsive'],
    cursor: ['responsive'],
    display: ['responsive'],
    flexbox: ['responsive'],
    float: ['responsive'],
    fonts: ['responsive'],
    fontWeights: ['responsive', 'hover', 'focus'],
    height: ['responsive'],
    leading: ['responsive'],
    lists: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    negativeMargin: ['responsive'],
    objectFit: false,
    objectPosition: false,
    opacity: ['responsive', 'group-hover'],
    outline: ['focus'],
    overflow: ['responsive'],
    padding: ['responsive'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    resize: ['responsive'],
    shadows: ['responsive', 'hover', 'focus'],
    svgFill: [],
    svgStroke: [],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColors: ['responsive', 'hover', 'focus'],
    textSizes: ['responsive'],
    textStyle: ['responsive', 'hover', 'focus'],
    tracking: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    width: ['responsive'],
    zIndex: ['responsive'],
  },

  plugins: [
    require('tailwindcss/plugins/container')({
      center: true,
      padding: '1rem',
    }),
    // require('tailwindcss-important')(),
    // require('tailwindcss-alpha')({
    //   modules: {
    //     backgroundColors: true
    //   },
    //   alpha: {
    //     '10': 0.1,
    //     '20': 0.2,
    //     '30': 0.3,
    //     '40': 0.4,
    //     '50': 0.5,
    //     '60': 0.6,
    //     '70': 0.7,
    //     '80': 0.8,
    //     '90': 0.9,
    //   }
    // }),
    // require('tailwindcss-aspect-ratio')({
    //   ratios: {
    //     'square': [1, 1],
    //     '6/4': [6, 4],
    //     '16/9': [16, 9],
    //     '4/3': [4, 3],
    //     '21/9': [21, 9],
    //     '5/3': [5, 3],
    //   }
    // }),
    // require('tailwindcss-flexbox-order')({
    //   range: {
    //     from: -5,
    //     to: 5
    //   },
    //   variants: ['responsive'],
    // }),
    // require('tailwindcss-grid')({
    //   grids: [12],
    //   gaps: {
    //     '0': '0',
    //     '1': '1rem',
    //   }
    // }),
    // require('tailwindcss-spinner')({
    //   name: 'spinner',
    //   color: colors['grey'],
    //   size: '2em',
    //   border: '3px',
    // }),
    require('tailwindcss-transitions')({
      variants: ['responsive'],
      properties: {
        all: 'all',
        bg: 'background',
      },
      durations: {
        default: '100ms',
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
      },
      timingFunctions: {
        default: 'ease',
        linear: 'linear',
      },
      delays: {
        none: '0s',
      },
      willChange: {},
    }),
    // require('tailwindcss-triangle-after')({
    //   triangles: {
    //     select: {
    //       direction: 'down',
    //       color: colors['black'],
    //       size: [10, 6],
    //     },
    //     nav: {
    //       direction: 'up',
    //       color: colors['red'],
    //       right: '1rem',
    //       size: [23, 10],
    //     }
    //   },
    // }),
  ],

  options: {
    prefix: '',
    important: false,
    separator: ':',
  },
}
