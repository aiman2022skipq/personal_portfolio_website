import { ThemeProvider } from 'styled-components';

import theme from "../themes/default";
import GlobalStyles from './globals';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

import './themeStyles.js';

import {Checkbox, Label, Ball } from './themeStyles.js';

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
    <Checkbox className="checkbox" type="checkbox" id="checkbox" />
    <Label htmlFor="checkbox" className="label">
      <FontAwesomeIcon icon={faSun} style={{color: "#f39c12",}} />
      <FontAwesomeIcon icon={faMoon} style={{color: "#f1c40f",}} />
      <Ball />
    </Label>
  </ThemeProvider>
);

export default Theme;