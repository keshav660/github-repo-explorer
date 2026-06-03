import { useState } from "react";

function SearchBar({ onSearch }) {
  const [username, setUsername] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();  
    if (!username.trim()) {
      return;
    }

    onSearch(username.trim());
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-4"
    >
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        className="flex-1 border rounded-lg px-4 py-3 outline-none"
      />

      <button
        type="submit"
        className="px-6 py-3 rounded-lg bg-black text-white"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;