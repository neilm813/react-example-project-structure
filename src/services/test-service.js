import axios from 'axios';

const http = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export const testPost = async (data) => {
  const res = await http.post('/posts', data);
  return res.data;
};
