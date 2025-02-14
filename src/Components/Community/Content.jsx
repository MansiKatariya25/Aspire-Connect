import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import api from "../Config/axios";
import { DataContext } from "../../App";

function Content() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { setDashboard, setChats } = useContext(DataContext);

  // Fetch posts from the API
  const fetchPosts = async () => {
    try {
      const response = await api.get("/community/get-posts");
      setPosts(response.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching posts:", err);
      setError("Failed to load posts");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleView = (post) => {
    setChats(post);
    setDashboard(12);
  };

  const handleFollow = async (id) => {
    try {
      const resp = await api.put(`/community/follow/${id}`);
      if (resp.status === 200) {
        alert(resp.data);
        // Refetch posts after follow
        fetchPosts();
      }
    } catch (error) {
      console.error("Error following user:", error);
      alert("Error following user. Please try again.");
    }
  };

  const handleLike = async (id) => {
    try {
      const resp = await api.put(`/community/like/${id}`);
      if (resp.status === 200) {
        alert(resp.data);
        // Refetch posts after like/unlike
        fetchPosts();
      }
    } catch (error) {
      console.error("Error liking/unliking post:", error);
      alert("Error liking/unliking post");
    }
  };

  return (
    <div className="w-[95%] flex flex-col items-center gap-6 font-Manrope">
      {/* Show Loading State */}
      {loading && <p className="text-center font-bold">Loading posts...</p>}

      {/* Show Error Message */}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Render Posts Dynamically */}
      {!loading &&
        !error &&
        posts.map((post) => (
          <div
            key={post.id}
            className="w-full bg-slate-100 rounded-md p-4 font-Manrope"
          >
            <div className="p-2 flex gap-4">
              <img
                onClick={() => {
                  handleView(post);
                }}
                src={
                  post.user?.profile_pic ||
                  "./default-avatar.png"
                }
                className="w-[50px] h-[50px] rounded-full hover:scale-110 transition-all duration-150 cursor-pointer"
                alt="Profile"
              />
              <div>
                <p className="font-Manrope font-bold text-[18px]">
                  {post.user
                    ? post.user?.fname.toUpperCase() +
                      " " +
                      post.user?.lname.toUpperCase()
                    : "Unknown User"}
                </p>
                <p className="text-gray-500 ">{post.user ? post.user.email : "No email"}</p>
                <p className="border border-orange-600 text-center bg-orange-200 p-2 rounded-full w-[100px] font-Manrope font-bold text-[12px] h-[30px] mt-2">
                  {post.user?.role.toUpperCase()}
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-col justify-center items-start gap-4">
              <p>{post.content}</p>
              {post.image && (
                <img
                  src={post.image}
                  className="h-full w-full rounded-md"
                  alt="Post"
                />
              )}
            </div>

            <div className="p-4 w-[98%] h-[10%] flex justify-between">
              <div className="p-2 px-4 flex items-center gap-2 cursor-pointer">
                <img
                  onClick={() => handleLike(post.id)}
                  className="hover:bg-gray-200 rounded-full p-2"
                  src="like.svg"
                  alt="Like"
                />
                <p className="font-Manrope font-bold">{post.likes?.length || 0}</p>
              </div>
              {/* <div
                onClick={() => handleFollow(post?.user?.id)}
                className="flex items-center h-[40px] border-2 border-black rounded-full p-2 cursor-pointer"
              >
                <img src="plus.svg" alt="Follow" />
                <p className="font-Manrope font-medium">Follow</p>
              </div> */}
            </div>
          </div>
        ))}
    </div>
  );
}

export default Content;
