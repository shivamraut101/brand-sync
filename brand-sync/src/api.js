import axios from 'axios';

const API_URL = process.env.REACT_APP_INSTAGRAM_API_URL;
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

export const fetchInstagramData = async () => {
  try {
    const response = await axios.get(`${API_URL}/me`, {
      params: {
        access_token: ACCESS_TOKEN,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching Instagram data", error);
    throw error;
  }
};
