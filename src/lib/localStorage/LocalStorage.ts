import { AsyncStorageAdapter } from './AsyncStorageAdapter';

class LocalStorage extends AsyncStorageAdapter {
  constructor() {
    super();
  }
}

export default new LocalStorage();
