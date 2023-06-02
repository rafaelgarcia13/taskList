import React, { useEffect, useState } from 'react';
import { Button, ScrollView, StatusBar, Text, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { ThemeProvider } from 'styled-components/native';

import TrendingMoviesService from './services/toDoListService/ToDoListService';
import { SafeAreaView } from './styles/global';
import { darkTheme } from './styles/themes/dark';
import { lightTheme } from './styles/themes/light';
import { ThemesIds } from './styles/themes/themeModel';

const App: React.FC = () => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () =>
    setTheme((previousTheme) =>
      previousTheme.id === ThemesIds.dark ? lightTheme : darkTheme,
    );

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const teste = async () => {
    const data = await TrendingMoviesService.getAllToDos();
    console.log('🚀 ~ file: App.tsx ~ line 29 ~ teste ~ data', JSON.stringify(data));
    toggleTheme();
  };

  useEffect(() => {
    teste();
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle={'dark-content'} backgroundColor={Colors.lighter} />
        <ScrollView>
          <Text>Ola mundo</Text>
          <Button onPress={toggleTheme} title="Trocar tema" />
        </ScrollView>
      </ThemeProvider>
    </SafeAreaView>
  );
};

export { App };
