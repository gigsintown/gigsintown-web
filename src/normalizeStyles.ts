import css from 'normalize.css';
import { injectGlobal } from './styledComponents';

// tslint:disable-next-line no-unused-expression
injectGlobal`
  ${css}
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 1.6rem;
  }
  html, body, #root {
    height: 100%;
  }
`;
