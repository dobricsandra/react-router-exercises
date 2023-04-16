import axios from "./axios-client";

export const LOGIN = async () => {
    const response = await axios.post(`auth/login`,
        {
            username: 'atuny0',
            password: '9uQFF1Lh',
        }
    );

    console.log(response.data.token);
    return response.data.token;
}