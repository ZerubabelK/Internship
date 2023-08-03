// Props: profile_image
interface Prop {
  profile_image: string;
}

// ProfileHeader component
const ProfileHeader: React.FC<Prop> = ({ profile_image }) => {
  return (
    <div className="w-full">
      <div className="w-full flex justify-between">
        <div className="flex">
          <div>
            <img
              className="w-40 h-40 rounded-full border-4 border-white -mt-10"
              src={profile_image}
            />
          </div>
          <div className="px-5 py-2 space-y-3">
            <h1 className="text-2xl font-bold">Profile</h1>
            <p className="text-gray-500">
              Update your photo and personal details
            </p>
          </div>
        </div>
        <div className="self-center space-x-3">
          <button className="border w-20 px-2 py-2 shadow-sm shadow-slate-800 rounded-md">
            Cancel
          </button>
          <button className="bg-slate-800 w-20 px-2 py-2 shadow-sm shadow-slate-800 rounded-md text-white">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
