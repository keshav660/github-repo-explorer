import axios from "axios";

const API_BASE_URL =
  "http://localhost:5000/api/github";

export const fetchGithubUser = async (
  username
) => {
  const response = await axios.get(
    `${API_BASE_URL}/${username}`
  );

  return response.data;
};