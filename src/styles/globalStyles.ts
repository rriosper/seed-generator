import { globalCss } from './stitches';

const globalStyles = globalCss({
  '@font-face': {
    fontFamily: 'Poppins',
    src: 'url(https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700&display=swap)',
    fontWeight: 400,
    fontStyle: 'normal',
    fontDisplay: 'swap',
  },
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },
  '*': {
    margin: 0,
  },
  'html, body': {
    height: '100%',
  },
  html: {
    scrollBehavior: 'smooth',
  },
  'div#__next': {
    maxWidth: '1500px',
    width: '100%',
    mx: 'auto',
  },
  body: {
    backgroundColor: '$bg',
    color: '$text',
    fontFamily:
      '"Poppins","Helvetica Neue","Helvetica","Roboto","Arial",sans-serif',
    lineHeight: 1.66,
    '-webkit-font-smoothing': 'antialiased',
  },
  'button, a': {
    cursor: 'pointer',
    '&[disabled]': {
      cursor: 'not-allowed',
    },
  },
  'input, button, a, select': {
    outlineColor: '$primary',
  },
  'input:focus-visible, button:focus-visible, a:focus-visible, select:focus-visible':
    {
      outlineStyle: 'solid',
      outlineColor: '$primary',
      outlineWidth: 2,
      outlineOffset: 0,
    },
  a: {
    textDecoration: 'none',
    color: '$text',
  },
});

export default globalStyles;
