import { useMemo, useState, useCallback, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ThemeColorContext } from './context';
import Layout from './components/Layout';
import './App.css';
import useTrottle from './hooks/useThrottling';
import InfoBlock from './components/InfoBlock';

function App() {
  const callback = useCallback(() => console.log('движение мыши'), []);
  const throttleMouseMove = useTrottle(callback, 1000);

  const [mode, setMode] = useState('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  useEffect(() => {
    document.addEventListener('mousemove', throttleMouseMove);
    return () => document.removeEventListener('mousemove', throttleMouseMove);
  }, []);

  return (
    <ThemeColorContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Layout theme={theme} handlerTheme={colorMode.toggleColorMode}>
          <InfoBlock />
        </Layout>
      </ThemeProvider>
    </ThemeColorContext.Provider>
  );
}

export default App;
