import React, { useState, useEffect } from 'react';
import LocalStorage from '../lib/localStorage/LocalStorage';
import { themeInfoKey, userInfoKey } from '../lib/localStorage/localStorageKeys';
import { SplashScreen } from '../screens/splashScreen/SplashScreen';
import { useThemeStore } from '../store/themeStore';
import { useUserStore } from '../store/userStore';
import { IThemeModel } from '../styles/themes/themeModel';
import { AuthNavigator } from './AuthNavigator';

const NavigatorContainer: React.FC = () => {
  const saveUserName = useUserStore(({ saveUserName }) => saveUserName);
  const setTheme = useThemeStore(({ setTheme }) => setTheme);

  const [isLoading, setIsLoading] = useState(true);

  const getUserInfo = async () => {
    const savedUserName = await LocalStorage.getItem<string>(userInfoKey);
    const savedTheme = await LocalStorage.getItem<IThemeModel>(themeInfoKey);
    if (savedTheme) setTheme(savedTheme);
    saveUserName(savedUserName);
    setIsLoading(false);
  };

  useEffect(() => {
    setTimeout(getUserInfo, 3000);
  }, []);

  return isLoading ? <SplashScreen /> : <AuthNavigator />;
};

export { NavigatorContainer };
