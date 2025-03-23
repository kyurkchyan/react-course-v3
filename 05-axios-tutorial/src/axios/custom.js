import axios from "axios";

const customFetch = axios.create({
  baseURL: "https://www.course-api.com",
  headers: {
    Accept: "application/json",
  },
});

export default customFetch;