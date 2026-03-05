import axios from 'axios';

const BASE_URL = 'https://reqres.in/api/users';
// const BASE_URL = 'https://randomuser.me/api';
const xApiKey = import.meta.env.VITE_X_API_KEY;

export const getEveryUser = async () => {
  try {
    const { data } = await axios.get(BASE_URL, {
      headers: {
        'x-api-key': xApiKey,
      },
    });
    return data;
  } catch (error) {
    console.error('💔', error);
    throw error;
  }
};

export const getSelectedUser = async (id: string) => {
  const url = `${BASE_URL}/${id}`;

  try {
    const { data } = await axios.get(url, {
      headers: {
        'x-api-key': xApiKey,
      },
    });
    return data;
  } catch (error) {
    console.error('💔', error);
    throw error;
  }
};
