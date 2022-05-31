import axios from "axios";

const api = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}`
});

// TODO: Implement error handling
api.interceptors.response.use(response => response, async (error) => {
    switch (error.response.status) {
        default:
            break;
    }
    return Promise.reject(error);
});

export default api;