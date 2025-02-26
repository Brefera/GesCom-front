import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'http://192.168.83.178:8000/api'; // Replace with your API URL

export const refreshAccessToken = async () => {
  try {
    const refreshToken = await AsyncStorage.getItem('refreshToken');

    if (!refreshToken) {
      return null;
    }

    const response = await axios.post(`${API_URL}/token/refresh/`, {
      refresh: refreshToken,
    });

    if (response.status === 200) {
      const newAccessToken = response.data.access;
      await AsyncStorage.setItem('accessToken', newAccessToken);
      return newAccessToken;
    }
  } catch (error) {
    console.error('Error refreshing token:', error);
    return null;
  }
};
