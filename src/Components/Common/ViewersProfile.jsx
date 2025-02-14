import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { DataContext } from "../../App";
import api from "../Config/axios";

export default function ViewersProfile() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { chats, setDashboard } = useContext(DataContext);
  // Fetch user and their posts
  useEffect(() => {
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

    fetchUserProfile();
  }, [chats]);

  const handleChats = () => {
    setDashboard(11);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="absolute top-12 w-[40vw] font-Manrope h-[92vh] p-6 right-[24vw] bg-white">
        {/* Show Loading State */}
        {loading && (
          <p className="text-center font-bold">Loading user profile...</p>
        )}

        {/* Show Error Message */}
        {error && <p className="text-center text-red-500">{error}</p>}

        {/* User Profile Section */}
        {!loading && user && (
          <div className="flex flex-col items-center bg-gray-100 p-6 rounded-md shadow-md">
            <img
              src={user[0].profile_pic || "default-avatar.png"} // Default if no profile pic
              alt="User Profile"
              className="w-24 h-24 rounded-full"
            />
            <h2 className="mt-4 text-2xl font-bold">
              {user[0]?.fname?.toUpperCase()} {user[0]?.lname?.toUpperCase()}
            </h2>
            <p className="text-gray-500">@{user[0]?.email}</p>
            <div className="mt-4 flex gap-4 items-center">
              <p className="font-semibold">
                {user[0]?.followers || 0} Followers
              </p>
              <button className="border border-gray-900 text-black px-4 py-2 rounded-full">
                + Follow
              </button>
              {user[0]?.role == "Company" ? (
                ""
              ) : (
                <img
                  src="./chat.png"
                  onClick={() => handleChats()}
                  className="hover:scale-105 transition-all duration-100 border-orange-600 hover:border rounded-full translate-x-2 w-[60px]"
                  alt="Chat"
                />
              )}
            </div>
          </div>
        )}

        {/* User's Posts Section */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold">Posts</h3>

          {/* Show No Posts Message */}
          {posts.length === 0 && !loading && (
            <p className="text-gray-500 text-center mt-4">No posts found.</p>
          )}

          {/* Render User's Posts */}
          <div className="mt-4 flex flex-col gap-4">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white p-4 rounded-md shadow-md border"
              >
                <p className="text-gray-700">{post.content}</p>
                {post.image && (
                  <img
                    src={post.image}
                    alt="Post"
                    className="mt-2 w-full h-auto rounded-md"
                  />
                )}
                <div className="mt-2 flex justify-between">
                  <p className="text-gray-500">👍 {post.like} Likes</p>
                  <p className="text-gray-500">💬 {post.comment} Comments</p>
                  <p className="text-gray-500">🔄 {post.share} Shares</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
