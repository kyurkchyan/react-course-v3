import axios from "axios";

const authFetch = axios.create({
  baseURL: "https://www.course-api.com",
});

const token = "abc123";

authFetch.interceptors.request.use(
  (request) => {
    request.headers["Authorization"] = `Bearer ${token}`;
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

authFetch.interceptors.response.use(
  (response) => {
    console.log("response received");
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default authFetch;
