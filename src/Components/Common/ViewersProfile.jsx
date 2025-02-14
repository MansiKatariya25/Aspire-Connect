import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "../../App";
import api from "../Config/axios";

export default function ViewersProfile() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { chats, setDashboard, userData } = useContext(DataContext);

  // Fetch user and their posts
  const fetchUserProfile = async () => {
    try {
      // Fetch User Info
      const userResponse = await api.get(
        `/users/get-user-data-by-query/${chats.email}`
      );
      setUser(userResponse.data);

      // Fetch User Posts
      const postsResponse = await api.get(
        `/community/get-posts-by-email/${chats.email}`
      );
      setPosts(postsResponse.data);

      setLoading(false);
    } catch (err) {
      console.error("Error fetching user data:", err);
      setError("Failed to load user profile.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, [chats]);

  const handleChats = () => {
    setDashboard(11);
  };

  const handleFollow = async (id) => {
    try {
      let resp;

      // If the user is not following, follow them
      resp = await api.put(`/community/follow/${id}`);

      if (resp.status === 200) {
        // Refetch the profile and posts after following/unfollowing
        fetchUserProfile();
      }
    } catch (error) {
      console.error("Error following/unfollowing user:", error);
      alert("Error following/unfollowing user. Please try again.");
    }
  };

  const handleLike = async (id) => {
    try {
      const resp = await api.put(`/community/like/${id}`);

      if (resp.status === 200) {
        // Successfully liked or unliked the post

        // Refetch the posts after liking/unliking
        fetchUserProfile();
      }
    } catch (error) {
      console.error("Error liking/unliking post:", error);
    }
  };

  return (
    <div className="absolute top-20 w-[85vw] font-Manrope flex flex-col justify-around items-center h-[92vh] p-6 right-0 bg-white">
      {/* Show Loading State */}
      {loading && (
        <p className="text-center font-bold">Loading user profile...</p>
      )}

      {/* Show Error Message */}
      {error && <p className="text-center text-red-500">{error}</p>}
      <h3 className="text-xl font-semibold w-full text-center mb-4">Profile</h3>
      {/* User Profile Section */}
      {!loading && user && (
        <div className="flex flex-col items-center p-6 w-1/2 justify-center rounded-md border border-orange-500 ">
        
          <img
            src={user[0]?.profile_pic || "default-avatar.png"} // Default if no profile pic
            alt="User Profile"
            className="w-24 h-24 rounded-full"
          />
          <h2 className="mt-4 text-2xl font-bold">
            {user[0]?.fname?.toUpperCase()} {user[0]?.lname?.toUpperCase()}
          </h2>
          <p className="text-gray-500">@{user[0]?.email}</p>
          <p className="text-lg mt-2 font-bold">Bio</p>
          <p className="text-gray-500 w-full p-2 text-sm">{user[0]?.description}</p>
          <div className="mt-4 flex gap-4 items-center">
            <p className="font-semibold">
              {user[0]?.followers?.length || 0} Followers
            </p>

            {/* Follow/Unfollow Button */}
            {user[0].id !== userData?.id && (
              <button
                onClick={() => handleFollow(user[0]?.id)}
                className="border border-gray-900 text-black px-4 py-2 rounded-full"
                disabled={loading}
              >
                {user[0]?.followers?.includes(userData?.id)
                  ? "Unfollow"
                  : "+ Follow"}
              </button>
            )}

            {/* Chat Icon (Only for non-companies) */}
            {user[0]?.role === "Company" || user[0].id == userData?.id ? (
              ""
            ) : (
              <img
                src="./chat.png"
                onClick={handleChats}
                className="hover:scale-105 transition-all duration-100 border-orange-600 hover:border rounded-full translate-x-2 w-[60px]"
                alt="Chat"
              />
            )}
          </div>
        </div>
      )}

      {/* User's Posts Section */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold w-full text-center">Posts</h3>

        {/* Show No Posts Message */}
        {posts.length === 0 && !loading && (
          <p className="text-gray-500 text-center mt-4">No posts found.</p>
        )}

        {/* Render User's Posts */}
        <div className="mt-4 flex flex-col gap-4 w-full justify-center items-center">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white p-4 rounded-md shadow-md border w-[50%]"
            >
              <p className="text-gray-700">{post.content}</p>
              {post.image && (
                <img
                  src={post.image}
                  alt="Post"
                  className="mt-2 w-full h-auto rounded-md"
                />
              )}
              <div className="mt-2 flex gap-2 items-center">
                <img
                  onClick={() => handleLike(post.id)}
                  className="hover:bg-gray-200 rounded-full p-2"
                  src="like.svg"
                  alt="Like"
                />
                <p className="text-gray-black font-bold">
                  {post.likes?.length || 0}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
