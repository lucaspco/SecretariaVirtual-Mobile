import api from './api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const authService = {
login: async (username: string, password: string) => {
    try {
      const response = await api.post('/login', { username, password });
      await AsyncStorage.setItem('token', response.data.jwt);
    } catch (error) {
      if (error.response) {
        throw new Error(error.response.data.message);
      }
      throw error;
    }
  },
  logout: async () => {
    await AsyncStorage.removeItem('token');
  },
  getToken: async () => {
    return await AsyncStorage.getItem('token');
  }
};

export default authService;
