import axios from "./axios-client";

export const LOGIN = async () => {
  const response = await axios.post(`auth/login`, {
    username: "atuny0",
    password: "9uQFF1Lh",
  });

  return response.data.token;
};
