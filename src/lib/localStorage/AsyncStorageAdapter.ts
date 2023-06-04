import AsyncStorage from '@react-native-async-storage/async-storage';

abstract class AsyncStorageAdapter {
  async getItem<T>(key: string): Promise<T> {
    try {
      const data = await AsyncStorage.getItem(key);
      const parsedData = data ? JSON.parse(data) : null;
      return parsedData as T;
    } catch {
      return null as T;
    }
  }

  async setItem(key: string, value: string) {
    try {
      await AsyncStorage.setItem(key, value);
    } catch {
      return null;
    }
  }
}

export { AsyncStorageAdapter };
