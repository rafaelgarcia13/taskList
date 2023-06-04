import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { lightTheme } from '../styles/themes/light';
import { IThemeModel } from '../styles/themes/themeModel';
import LocalStorage from '../lib/localStorage/LocalStorage';
import { themeInfoKey } from '../lib/localStorage/localStorageKeys';

interface UserState {
  theme: IThemeModel;
}

interface UserActions {
  setTheme: (theme: IThemeModel) => void;
}

const useThemeStore = create<UserState & UserActions>()(
  persist(
    (set) => ({
      theme: lightTheme,
      setTheme: (theme: IThemeModel) => {
        set(() => ({ theme }));
        LocalStorage.setItem(themeInfoKey, JSON.stringify(theme));
      },
    }),
    {
      name: 'theme-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: ({ theme }) => ({ theme }),
    },
  ),
);

export { useThemeStore };
