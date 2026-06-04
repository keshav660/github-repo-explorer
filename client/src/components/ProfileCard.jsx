function ProfileCard({ profile }) {
  if (!profile) {
    return null;
  }

  return (
    <div className="mt-8 border rounded-xl p-6 shadow-sm">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <img
          src={profile.avatar_url}
          alt={profile.name}
          className="w-32 h-32 rounded-full"
        />

        <div>
          <h2 className="text-2xl font-bold">{profile.name}</h2>

          <p className="text-gray-600 mt-2">{profile.bio}</p>

          <div className="flex gap-6 mt-4">
            <span>Followers: {profile.followers}</span>

            <span>Following: {profile.following}</span>

            <span>Repos: {profile.public_repos}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
