const axios = require("axios");
const cache = require("../cache/cache");

const fetchGithubUser = async (username) => {
  const cachedData = cache.get(username);

  if (cachedData) {
    console.log(`Cache hit for ${username}`);
    return cachedData;
  }

  console.log(`Cache miss for ${username}`);
  
  try {
    const [userResponse, reposResponse] = await Promise.all([
      axios.get(`https://api.github.com/users/${username}`),
      axios.get(`https://api.github.com/users/${username}/repos`),
    ]);

    const result = {
      profile: userResponse.data,
      repositories: reposResponse.data,
    };

    cache.set(username, result);

    return result;
  } catch (error) {
    if (error.response?.status === 404) {
      throw new Error("GitHub user not found");
    }

    if (error.response?.status === 403) {
      throw new Error("GitHub API rate limit exceeded");
    }

    throw new Error("Unable to fetch GitHub data");
  }
};

module.exports = {
  fetchGithubUser,
};
