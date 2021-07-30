import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from '@/theme';
import AppRoute from '@/routes';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <AppRoute />
  </ThemeProvider>
);

export default App;
