import axios from 'axios';

axios.defaults.baseURL =
  'https://1b228c5f-b9b2-4ed8-96ca-8c0bfded127d.mock.pstmn.io';

const fetcher = async (method, url, ...rest) => {
  const res = await axios[method](url, ...rest);

  return res.data;
};

export default fetcher;
