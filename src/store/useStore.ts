import { create } from 'zustand';
import { IFeedbackCard } from '../components/feedbackCard/feedbackCardModel';
import AsyncStorageFacade from '../lib/localStorage/AsyncStorageFacade';
import { themeInfoKey } from '../lib/localStorage/localStorageKeys';
import { lightTheme } from '../styles/themes/light';
import { IThemeModel } from '../styles/themes/themeModel';

interface StoreState {
  userName: string;
  theme: IThemeModel;
  feedbackData: IFeedbackCard;
}

interface StoreActions {
  saveUserName: (user: string) => void;
  setTheme: (theme: IThemeModel) => void;
  setFeedback: (feedback: IFeedbackCard) => void;
}

const useStore = create<StoreState & StoreActions>((set) => ({
  feedbackData: { isError: false, message: '', isOpen: false },
  theme: lightTheme,
  userName: '',
  setTheme: (theme: IThemeModel) => {
    set({ theme });
    AsyncStorageFacade.setItem<IThemeModel>(themeInfoKey, theme);
  },
  saveUserName: (userName: string) => set({ userName }),
  setFeedback: (feedbackData: IFeedbackCard) => set({ feedbackData }),
}));

export { useStore };
