import Axios from 'axios';

const urlMovements = `${process.env.BASE_API_URL}/movements`;
const urlAccount = `${process.env.BASE_API_URL}/account`;

export const getMovements = (id) =>
  Axios.get(urlMovements, { params: { accountId: id } }).then(
    (response) => response.data
  );

export const getAccount = (id) =>
  Axios.get(`${urlAccount}/${id}`).then((response) => response.data);
