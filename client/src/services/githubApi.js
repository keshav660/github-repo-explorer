import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL;

export const fetchGithubUser = async (username) => {
  const response = await axios.get(`${API_BASE_URL}/${username}`);

  return response.data;
};
