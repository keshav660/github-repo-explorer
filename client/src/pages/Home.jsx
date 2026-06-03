import SearchBar from "../components/SearchBar";
import ProfileCard from "../components/ProfileCard";
const demoProfile = {
  avatar_url: "https://avatars.githubusercontent.com/u/108389536?s=400&u=192478f371a67d04bbbcd207cd843aaee1157c5e&v=4",
  name: "keshav bhatt",
  bio: "Full stack developer | Open source enthusiast | Tech blogger",
  followers: 25000,
  following: 4,
  public_repos: 40,
};
function Home() {
  const handleSearch = (username) => {
    console.log("Searching:", username);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">
        GitHub Repo Explorer
      </h1>

      <SearchBar onSearch={handleSearch} />
      <ProfileCard profile={demoProfile} />

    </div>
  );
}

export default Home;