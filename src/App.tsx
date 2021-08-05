import React from 'react';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';

import { theme } from '@/theme';
import AppRoute from '@/routes';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <RecoilRoot>
      <AppRoute />
    </RecoilRoot>
  </ThemeProvider>
);

export default App;
