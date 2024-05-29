import { json } from 'react-router-dom';

export const GETAPIData = async ({ url }) => {
  const data = await fetch(`${url}`);
  //const resData = await data.json();
  return data;
};
