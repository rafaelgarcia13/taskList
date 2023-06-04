import AsyncStorage from '@react-native-async-storage/async-storage';

AsyncStorage.setItem;

interface ILocalStorage {
  getItem<T>(key: string): Promise<T>;
  setItem: (key: string, value: string) => Promise<void>;
}

export { ILocalStorage };
