import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ThemeColorContext } from './context';
import Layout from './components/Layout';
import Content from './components/Content';
import './App.css';

function App() {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ThemeColorContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Layout theme={theme} handlerTheme={colorMode.toggleColorMode}>
          <Content></Content>
        </Layout>
      </ThemeProvider>
    </ThemeColorContext.Provider>
  );
}

export default App;
