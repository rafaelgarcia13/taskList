import AsyncStorage from '@react-native-async-storage/async-storage';

class AsyncStorageFacade {
  async getItem<T>(key: string): Promise<T> {
    try {
      const data = await AsyncStorage.getItem(key);
      const parsedData = data ? JSON.parse(data) : null;
      return parsedData as T;
    } catch {
      return null as T;
    }
  }

  async setItem<T>(key: string, value: T) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch {
      return null;
    }
  }
}

export default new AsyncStorageFacade();
