import RepoCard from "./RepoCard";

function RepoList({ repos }) {
  return (
    <div className="mt-8 space-y-4">
      {repos.map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </div>
  );
}

export default RepoList;

