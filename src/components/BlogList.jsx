import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../redux/actions/BlogActions";
import NavInputSearch from "./common/NavInputSearch";
import { useLocation } from "react-router-dom";
const BlogList = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const blogs = useSelector((state) => state.blog.blogs);
  const [sortedBlogs, setSortedBlogs] = useState([]);

  console.log("blogs", blogs);
  useEffect(() => {
    // Refetch blogs when the URL search parameters change
    dispatch(fetchBlogs(location.search));
    console.log("Fetching blogs for search:", location.search);
  }, [location.search, dispatch]);

  const sortBlogs = (sortBy) => {
    let sorted = [...blogs];
    if (sortBy) {
      if (sortBy === "tags") {
        sorted = sorted.sort((a, b) => {
          const tagA = a.tags && a.tags.length > 0 ? a.tags[0] : "";
          const tagB = b.tags && b.tags.length > 0 ? b.tags[0] : "";
          return tagA.localeCompare(tagB);
        });
      } else if (sortBy === "title") {
        sorted = sorted.sort((a, b) => a.title.localeCompare(b.title));
      } else if (sortBy === "userId") {
        sorted = sorted.sort((a, b) => a.userId - b.userId);
      } else if (sortBy === "date") {
        sorted = sorted.sort((a, b) => new Date(a.date) - new Date(b.date));
      }
    }
    setSortedBlogs(sorted);
  };

  useEffect(() => {
    if (blogs && blogs.length > 0) {
      const params = new URLSearchParams(location.search);
      const sortBy = params.get("q");
      sortBlogs(sortBy);
    }
  }, [blogs, location.search]);

  return (
    <div className="max-w-[1296px] mx-auto px-3">
      <div className="flex sm:items-center justify-between mt-4 flex-wrap gap-5">
        <h1>
          <span className="text-white bg-[#00AAA1] text-[21px] font-bold">
            {" "}
            Featured{" "}
          </span>
          <span className="text-black font-semibold"> This month</span>
        </h1>
        <NavInputSearch />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5">
        {sortedBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
