
import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Arial, Helvetica, sans-serif;
    font-size: 14px;
    line-height: 1.4285em;
    color: rgba(0, 0, 0, .87);
    min-width: 320px;
  }

  body.fontLoaded {
    font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;

    button {
      font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
    }
  }

  p {
    font-size: 16px;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.8);
  }

  #app {
    background-color: #FFFFFF;
    min-height: 100%;
    min-width: 100%;
  }

  input::-webkit-input-placeholder {
    color: rgba(0, 0, 0, 0.55);
  }

  input::-moz-placeholder {
    color: rgba(0, 0, 0, 0.55);
  }
`;
