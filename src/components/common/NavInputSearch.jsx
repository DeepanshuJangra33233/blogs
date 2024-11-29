import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchBlogs } from "../../redux/actions/BlogActions";

const BlogList = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("");

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleFetchBlogs = () => {
    const searchQuery = `q=${filter}`;
    dispatch(fetchBlogs(searchQuery));
  };

  return (
    <div className="flex items-center gap-3 ">
      <input
        className="py-2 px-2 border-2 border-gray rounded-lg w-full max-w-[300px]"
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Search blogs..."
      />
      <button
        className="bg-[#00AAA1] text-white py-2 px-4 rounded-lg text-nowrap"
        onClick={handleFetchBlogs}
      >
        Fetch Blogs
      </button>
    </div>
  );
};

export default BlogList;
