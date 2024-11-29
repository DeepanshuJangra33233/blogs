import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="shadow hover:shadow-lg transition duration-300 rounded-lg p-3 flex flex-col justify-between items-start">
      <div>
        <img
          className="lg:min-w-[275px] lg:min-h-[176px] w-full object-cover"
          src={`https://picsum.photos/390/250?random=${blog.id}`}
          alt="random-image"
        />
        <h2 className="text-2xl font-bold line-clamp-2">{blog.title}</h2>
        <p className="line-clamp-4">{blog.body}</p>
        <p>
          <span className="font-semibold text-red-500">View:</span> {blog.views}
        </p>
      </div>
      <Link
        className="mt-2 text-blue-300 border-2 border-gray rounded-lg px-3 py-1"
        to={`/details/${blog.id}`}
      >
        View Details
      </Link>
    </div>
  );
};

export default BlogCard;
