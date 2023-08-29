import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_URL}`;

export const get = async (params: string) => {
    try {
      const response = await axios.get(API_URL + '/pokemon' + params);

      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
};

export const getOne = async (url: string) => {
  try {
    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};