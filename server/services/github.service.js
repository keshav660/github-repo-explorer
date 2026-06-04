const axios = require("axios");

const fetchGithubUser = async (username) => {
  try {
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
  } catch (error) {

    if (error.response?.status === 404) {
      throw new Error("GitHub user not found");
    }

    if (error.response?.status === 403) {
      throw new Error(
        "GitHub API rate limit exceeded"
      );
    }

    throw new Error(
      "Unable to fetch GitHub data"
    );
  }
};

module.exports = {
  fetchGithubUser,
};