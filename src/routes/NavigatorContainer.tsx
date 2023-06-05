import React, { useState, useEffect } from 'react';
import AsyncStorageFacade from '../lib/localStorage/AsyncStorageFacade';
import { themeInfoKey, userInfoKey } from '../lib/localStorage/localStorageKeys';
import { SplashScreen } from '../screens/splashScreen/SplashScreen';
import { useStore } from '../store/useStore';
import { IThemeModel } from '../styles/themes/themeModel';
import { AuthNavigator } from './AuthNavigator';

const NavigatorContainer: React.FC = () => {
  const saveUserName = useStore(({ saveUserName }) => saveUserName);
  const setTheme = useStore(({ setTheme }) => setTheme);

  const [isLoading, setIsLoading] = useState(true);

  const getUserInfo = async () => {
    const savedUserName = await AsyncStorageFacade.getItem<string>(userInfoKey);
    const savedTheme = await AsyncStorageFacade.getItem<IThemeModel>(themeInfoKey);
    saveUserName(savedUserName);
    if (savedUserName) setTheme(savedTheme);
    setIsLoading(false);
  };

  useEffect(() => {
    setTimeout(() => getUserInfo(), 3000);
  }, []);

  return isLoading ? <SplashScreen /> : <AuthNavigator />;
};

export { NavigatorContainer };
