import { useState } from "react";
import SearchBar from "../components/SearchBar";
import ProfileCard from "../components/ProfileCard";
import RepoList from "../components/RepoList";

const demoProfile = {
  avatar_url:
    "https://avatars.githubusercontent.com/u/108389536?s=400&u=192478f371a67d04bbbcd207cd843aaee1157c5e&v=4",
  name: "keshav bhatt",
  bio: "Full stack developer | Open source enthusiast | Tech blogger",
  followers: 25000,
  following: 4,
  public_repos: 40,
};

const demoRepos = [
  {
    id: 1,
    name: "react",
    description: "Frontend library",
    language: "JavaScript",
    stargazers_count: 235000,
    updated_at: "2026-06-01",
  },
  {
    id: 2,
    name: "next.js",
    description: "React framework",
    language: "JavaScript",
    stargazers_count: 130000,
    updated_at: "2026-06-02",
  },
  {
    id: 3,
    name: "tailwindcss",
    description: "Utility-first CSS framework",
    language: "TypeScript",
    stargazers_count: 90000,
    updated_at: "2026-06-03",
  },
];

function Home() {
  const [sortBy, setSortBy] = useState("name");

  const handleSearch = (username) => {
    console.log("Searching:", username);
  };

  // Copy array before sorting
  const sortedRepos = [...demoRepos];

  // Sort using Name
  if (sortBy === "name") {
    sortedRepos.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  // sort by Stars
  if (sortBy === "stars") {
    sortedRepos.sort(
      (a, b) => b.stargazers_count - a.stargazers_count
    );
  }

  // Sort by Updated Date
  if (sortBy === "updated") {
    sortedRepos.sort(
      (a, b) =>
        new Date(b.updated_at) -
        new Date(a.updated_at)
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">
        GitHub Repo Explorer
      </h1>

      <SearchBar onSearch={handleSearch} />

      <ProfileCard profile={demoProfile} />

      <div className="flex items-center gap-3 mt-6 mb-4">
        <label htmlFor="sort" className="font-medium">
          Sort By:
        </label>

        <select
          id="sort"
          value={sortBy}
          onChange={(event) =>
            setSortBy(event.target.value)
          }
          className="border rounded-md px-3 py-2"
        >
          <option value="name">Name</option>
          <option value="stars">Stars</option>
          <option value="updated">Last Updated</option>
        </select>
      </div>

      <RepoList repos={sortedRepos} />
    </div>
  );
}

export default Home;