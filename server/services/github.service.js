const axios = require("axios");

const fetchGithubUser = async (username) => {
  const [userResponse, reposResponse] =
    await Promise.all([
      axios.get(
        `https://api.github.com/users/${username}`
      ),
      axios.get(
        `https://api.github.com/users/${username}/repos`
      ),
    ]);

  return {
    profile: userResponse.data,
    repositories: reposResponse.data,
  };
};

module.exports = {
  fetchGithubUser,
};