const { fetchGithubUser } = require("../services/github.service");

const getGithubUser = async (req, res) => {
  try {
    const { username } = req.params;

    const data = await fetchGithubUser(username);

    res.status(200).json(data);
  } catch (error) {
    if (error.message === "GitHub user not found") {
      return res.status(404).json({
        message: error.message,
      });
    }

    if (error.message === "GitHub API rate limit exceeded") {
      return res.status(429).json({
        message: error.message,
      });
    }

    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getGithubUser,
};

const {
  fetchGithubUserData,
} = require("../services/github.service");

const getGithubUser = async (req, res) => {
  try {
    const { username } = req.params;

    const data = await fetchGithubUserData(username);

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getGithubUser,
};