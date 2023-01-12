import axios from 'axios';
export const fetchData = async () => {
  try {
    const { data } = await axios.get(
      'https://restcountries.com/v2/all?fields=name,capital,population,region,flag'
    );

    const response = await data;
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('errorMesasge', error.message);
      return error.message;
    }
  }
};
