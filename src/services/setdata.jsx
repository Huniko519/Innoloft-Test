import axios from "axios";

export const updateProduct = (id) => {
  axios.put(process.env.REACT_APP_API_URL + `/product/${id}/`);
};
