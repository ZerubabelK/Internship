import { User } from "../pages/profile";

// Props: user
interface Prop {
  user: User;
}

// Details component
const Details: React.FC<Prop> = ({ user }) => {
  return (
    <div className="w-full mt-5">
      <div className="w-5/6 space-y-3">
        <div className="grid grid-cols-3">
          <h2 className="font-semibold">Username</h2>
          <div className="border rounded-lg p-3 col-span-2">
            <h2 className="text-gray-500">{user.username}</h2>
          </div>
        </div>
        <div className="grid grid-cols-3">
          <h2 className="font-semibold">Email</h2>
          <div className="border rounded-lg p-3 col-span-2">
            <h2 className="text-gray-500">{user.email}</h2>
          </div>
        </div>
        {user.website && (
          <div className="grid grid-cols-3">
            <h2 className="font-semibold">Website</h2>
            <div className="border rounded-lg p-3 col-span-2">
              <h2 className="text-gray-500">{user.website}</h2>
            </div>
          </div>
        )}
        <div className="grid grid-cols-3">
          <div>
            <h2 className="font-semibold">Your Photo</h2>
            <p className="text-gray-500">
              This will be displayed on your profile
            </p>
          </div>
          <div className="border rounded-lg p-3 col-span-2 flex justify-between">
            <img
              src={user.profile_image}
              alt="profile image"
              className="w-16 h-16"
            />
            <div className="self-center text-neutral-700 space-x-3">
              <button>Delete</button>
              <button>Update</button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3">
          <div>
            <h2 className="font-semibold">Your Bio</h2>
            <p className="text-gray-500">Write a short introduction</p>
          </div>
          <div className="border rounded-lg p-3 col-span-2">
            <h2 className="text-gray-500">{user.bio}</h2>
          </div>
        </div>
        <div className="grid grid-cols-3">
          <h2 className="font-semibold">Location</h2>
          <div className="border rounded-lg p-3 col-span-2">
            <h2 className="text-gray-500">{user.location}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
