import React, { useContext, useState } from "react";
import axios from "axios";
import api from "../Config/axios";
import Loading from "../Common/Loading";
import { DataContext } from "../../App";

function PostAction() {
  const [postText, setPostText] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const { userData, setUserData } = useContext(DataContext);

  // Handle text change
  const handleTextChange = (event) => {
    setPostText(event.target.value);
  };

  // Handle image selection
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!postText.trim()) {
      alert("Please enter some text for the post.");
      return;
    }

    const formData = new FormData();
    formData.append("entity", JSON.stringify({ content: postText }));

    if (selectedImage) {
      formData.append("postImage", selectedImage);
    }

    setLoading(true);

    try {
      const response = await api.post("/community/send-post", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Post published successfully!");
      setPostText("");
      setSelectedImage(null);
      setPreviewImage(null);
    } catch (error) {
      console.error("Error posting:", error);
      alert("Error publishing post.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[95%]   border-2 border-[#FF8C42] rounded-md p-4 flex flex-col gap-2 font-Manrope">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="w-[80%] flex gap-4">
          <img
            src={
              userData?.profile_pic || "https://avatar.iran.liara.run/public"
            }
            className="w-[50px] h-[50px] rounded-full cursor-pointer"
            alt="Profile"
          />
          <textarea
            name="post"
            className="w-full outline-none rounded-md resize-none p-2"
            placeholder="Start a Post"
            rows="4"
            value={postText}
            onChange={handleTextChange}
          />
        </div>

        {/* Image Preview */}
        {previewImage && (
          <div className="relative w-[200px]">
            <img
              src={previewImage}
              className="w-full h-auto rounded-md p-2"
              alt="Preview"
            />
            <button
              type="button"
              className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full"
              onClick={() => {
                setSelectedImage(null);
                setPreviewImage(null);
              }}
            >
              ✕
            </button>
          </div>
        )}

        <div className="flex justify-between items-center gap-2">
          {/* Image Upload Button */}
          <label className="flex items-center gap-2 bg-white p-2 rounded-md cursor-pointer">
            <img
              src="photoadd.png"
              className="w-[40px] h-[40px]  border-gray-200 border rounded-md p-1"
              alt="Add"
            />
            <p className="text-md"></p>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            className="border-2 hover:bg-[#FF8C42] hover:text-white transition-all duration-100 border-[#FF8C42] rounded-full p-2 px-6  font-sm text-[#FF8C42]"
            disabled={loading}
          >
            {loading ? "Posting..." : "+ Post"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default PostAction;
