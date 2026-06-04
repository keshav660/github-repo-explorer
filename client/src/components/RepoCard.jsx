const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
function RepoCard({ repo }) {
  return (
    <div className="border rounded-xl p-5 shadow-sm">
      <h3 className="text-xl font-semibold">{repo.name}</h3>

      <p className="text-gray-600 mt-2">
        {repo.description || "No description available"}
      </p>

      <div className="flex flex-wrap gap-4 mt-4 text-sm">
        <span>💻 {repo.language || "Unknown"}</span>

        <span>⭐ {repo.stargazers_count}</span>

        <span>Updated: {formatDate(repo.updated_at)}</span>
      </div>
    </div>
  );
}

export default RepoCard;
