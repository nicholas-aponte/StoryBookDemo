import React from 'react';

import { withThemes } from '@react-theming/storybook-addon';
import { ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import { getDocument } from '../data/api';
import EditDocument from '../components/EditDocument';
import { theme1, theme2 } from '../theme';

const providerFn = ({ theme, children }) => {
  const serialTheme = JSON.parse(JSON.stringify(theme));
  const muTheme = createTheme(serialTheme);
  return <ThemeProvider theme={muTheme}>{children}</ThemeProvider>;
};

export default {
  title: 'MUI Examples',
  component: EditDocument,
  decorators: [ withThemes(null, [theme1, theme2], { providerFn })],
};




export const ToStorybook = () => {
  <EditDocument 
  />;
}

ToStorybook.story = {
  name: 'EditDocument',
};
