import React from "react";
import ProfileHeader from "../components/ProfileHeader";
import Details from "../components/Details";
import NavBar from "../components/NavBar";

// interface for user object
export interface User {
  username: string;
  email: string;
  profile_image: string;
  bio: string;
  location: string;
  website?: string;
}

// sample data for user
const user: User = {
  username: "janedoe",
  email: "janedoe@gmail.com",
  profile_image: "./src/assets/Avatar_Image.svg",
  bio: "I am a passionate and creative writer who loves to explore new topics and share my insights with the world. I write about anything that sparks my curiosity, from travel and culture to science and technology. I enjoy learning new things and challenging myself to improve my skills and knowledge. My goal is to inspire and entertain my readers with engaging and informative content. You can find some of my work on [my website] or follow me on [Twitter] and [Instagram]. Thank you for reading! 😊",
  location: "Addis Ababa, Ethiopia",
  // website: "https://janedoe.com",
};

// Profile page component
const Profile: React.FC = () => {
  return (
    <div className="w-screen h-screen">
      <NavBar />
      <div className="w-4/5 mx-auto">
        <div className="w-full bg-gradient-to-r from-cyan-200 to-blue-200 min-h-[25vh] rounded-tl-[150px]"></div>
        <div className="w-5/6 mx-auto">
          <ProfileHeader profile_image={user.profile_image} />
          <Details user={user} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
