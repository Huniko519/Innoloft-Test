import axios from "axios";
export const getProduct = async (id) => {
  try {
    const res = await axios.get(
      process.env.REACT_APP_API_URL + `/product/${id}/`
    );
    return Promise.resolve(res.data);
  } catch (e) {
    return Promise.reject(e);
  }
};

export const getTrls = async () => {
  try {
    const res = await axios.get(process.env.REACT_APP_API_URL + `/trl/`);
    return Promise.resolve(res.data);
  } catch (e) {
    return Promise.reject(e);
  }
};

export const getConfiguration = async () => {
  try {
    const resurl =
      process.env.REACT_APP_API_URL +
      `/configuration/` +
      process.env.REACT_APP_APP_ID;

    const res = await axios.get(resurl, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      withCredentials: false,
    });
    return Promise.resolve(res.data);
  } catch (e) {
    return Promise.reject(e);
  }
};
