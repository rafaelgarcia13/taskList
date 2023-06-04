import { create } from 'zustand';
import AsyncStorageFacade from '../lib/localStorage/AsyncStorageFacade';
import { themeInfoKey } from '../lib/localStorage/localStorageKeys';
import { lightTheme } from '../styles/themes/light';
import { IThemeModel } from '../styles/themes/themeModel';

interface StoreState {
  userName: string;
  theme: IThemeModel;
}

interface StoreActions {
  saveUserName: (user: string) => void;
  setTheme: (theme: IThemeModel) => void;
}

const useStore = create<StoreState & StoreActions>((set) => ({
  theme: lightTheme,
  userName: '',
  setTheme: (theme: IThemeModel) => {
    set({ theme });
    AsyncStorageFacade.setItem<IThemeModel>(themeInfoKey, theme);
  },
  saveUserName: (userName: string) => set({ userName }),
}));

export { useStore };
