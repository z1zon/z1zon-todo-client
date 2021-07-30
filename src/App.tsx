import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from '@/theme';

const App: React.FC = () => <ThemeProvider theme={theme}>init</ThemeProvider>;

export default App;
