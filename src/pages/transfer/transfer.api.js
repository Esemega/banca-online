import Axios from 'axios';

const urlAccounts = `${process.env.BASE_API_URL}/account`;
const urlTransfer = `${process.env.BASE_API_URL}/transfer`;

export const getAccounts = () =>
  Axios.get(urlAccounts).then((response) => response.data);

export const sendTransfer = (transfer) =>
  Axios.post(urlTransfer, transfer).then((response) => response.data);
