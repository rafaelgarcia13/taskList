import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { ThemeProvider } from 'styled-components/native';
import { StatusBarStyled } from './components/statusBar/StatusBar';
import { NavigatorContainer } from './routes/NavigatorContainer';
import { useStore } from './store/useStore';

import { SafeAreaView } from './styles/global';

const queryClient = new QueryClient();

const App: React.FC = () => {
  const theme = useStore(({ theme }) => theme);

  return (
    <SafeAreaView>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <StatusBarStyled theme={theme} />
          <NavigatorContainer />
        </ThemeProvider>
      </QueryClientProvider>
    </SafeAreaView>
  );
};

export { App };
