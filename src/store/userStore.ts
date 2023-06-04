import { create } from 'zustand';
import LocalStorage from '../lib/localStorage/LocalStorage';
import { userInfoKey } from '../lib/localStorage/localStorageKeys';

interface UserState {
  userName: string;
}

interface UserActions {
  saveUserName: (user: string) => void;
}

const useUserStore = create<UserState & UserActions>((set) => ({
  userName: '',
  saveUserName: (userName: string) => {
    set(() => ({ userName }));
    LocalStorage.setItem(userInfoKey, userName);
  },
}));

export { useUserStore };
