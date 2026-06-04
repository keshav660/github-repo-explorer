const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const githubRoutes = require("./routes/github.routes");
app.use("/api/github", githubRoutes);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json({
    message: "GitHub API is running",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});