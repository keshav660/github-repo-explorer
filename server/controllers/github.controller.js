const { fetchGithubUser } = require("../services/github.service");

const getGithubUser = async (req, res) => {
  try {
    const { username } = req.params;

    const data = await fetchGithubUser(username);

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
