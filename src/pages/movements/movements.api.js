import Axios from 'axios';

const urlMovements = `${process.env.BASE_API_URL}/movements`;
const urlAccount = `${process.env.BASE_API_URL}/account`;

export const getMovements = () =>
  Axios.get(`${urlMovements}`)
  .then((response) => response.data)
  .catch(error => console.log(error));

export const getAccount = (id) =>
  Axios.get(`${urlAccount}/${id}`)
  .then((response) => response.data)
  .catch(error => console.log(error));
