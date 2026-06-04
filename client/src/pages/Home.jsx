import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import ProfileCard from "../components/ProfileCard";
import RepoList from "../components/RepoList";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import { fetchGithubUser } from "../services/githubApi";

function Home() {
  const [sortBy, setSortBy] = useState("name");

  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);

  useEffect(() => {
    const savedSearches = localStorage.getItem("recentSearches");

    if (savedSearches) {
      setRecentSearches(JSON.parse(savedSearches));
    }
  }, []);

  const handleSearch = async (username) => {
    try {
      setLoading(true);
      setError("");

      const data = await fetchGithubUser(username);

      setProfile(data.profile);
      setRepos(data.repositories);

      setRecentSearches((prev) => {
        const updated = [username, ...prev.filter((item) => item !== username)];

        localStorage.setItem(
          "recentSearches",
          JSON.stringify(updated.slice(0, 5)),
        );

        return updated.slice(0, 5);
      });
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const sortedRepos = [...repos];

  if (sortBy === "name") {
    sortedRepos.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sortBy === "stars") {
    sortedRepos.sort((a, b) => b.stargazers_count - a.stargazers_count);
  }

  if (sortBy === "updated") {
    sortedRepos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">
        GitHub Repo Explorer
      </h1>

      <SearchBar onSearch={handleSearch} />

      {recentSearches.length > 0 && (
        <div className="mt-4">
          <h3 className="font-semibold mb-2">Recent Searches</h3>
          
         
          <div className="flex flex-wrap gap-2">
            {recentSearches.map((item) => (
              <button
                key={item}
                onClick={() => handleSearch(item)}
                className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm transition"
              >
                {item}
              </button>
            ))}
            
          </div>
           {!profile && !loading && !error && (
            <div className="mt-10 text-center">
              <p className="text-gray-500">
                Search for a GitHub username to get started.
              </p>
            </div>
          )}
        </div>
      )}

      {loading && <Loading />}

      {error && <ErrorMessage message={error} />}

      {profile && <ProfileCard profile={profile} />}

      {repos.length > 0 && (
        <>
          <div className="flex items-center gap-3 mt-6 mb-4">
            <label htmlFor="sort" className="font-medium">
              Sort By:
            </label>

            <select
              id="sort"
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
              className="border rounded-md px-3 py-2"
            >
              <option value="name">Name</option>
              <option value="stars">Stars</option>
              <option value="updated">Last Updated</option>
            </select>
          </div>

          <RepoList repos={sortedRepos} />
        </>
      )}
    </div>
  );
}

export default Home;
