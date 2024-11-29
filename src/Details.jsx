import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [commentsLoading, setCommentsLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/posts/${id}`);
        const data = await response.json();
        setBlog(data);
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchComments = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/posts/${id}/comments`
        );
        const data = await response.json();
        setComments(data.comments);
      } catch (error) {
        console.error("Error fetching comments:", error);
      } finally {
        setCommentsLoading(false);
      }
    };

    fetchBlog();
    fetchComments();
  }, [id]);

  if (loading) {
    return <div>Loading blog...</div>;
  }

  if (!blog) {
    return <div>Blog not found.</div>;
  }

  return (
    <div className="max-w-[800px] mx-auto p-4">
      <h1 className="text-2xl font-bold">{blog.title}</h1>
      <p className="text-gray-600">By User {blog.userId}</p>
      <img
        className="lg:min-w-[275px] lg:min-h-[492px] w-full object-cover mt-3"
        src={`https://picsum.photos/390/250?random=${blog.id}`}
        alt="random-image"
      />
      <p className="mt-4">{blog.body}</p>
      <div className="mt-6">
        <h2 className="text-lg font-semibold">Tags:</h2>
        <ul className="list-disc list-inside">
          {blog.tags?.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>

      {/* Comments Section */}
      <div className="mt-8">
        <span className="text-lg font-semibold bg-[#00AAA1] text-white px-1">
          Comments:
        </span>
        {commentsLoading ? (
          <p>Loading comments...</p>
        ) : comments.length > 0 ? (
          <div className="list-disc list-inside">
            {comments.map((comment) => (
              <div key={comment.id} className="mt-2 border p-3 rounded-md">
                <p className="font-medium">{comment.user.username}</p>
                <p className="text-gray-700">{comment.body}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No comments available.</p>
        )}
      </div>
    </div>
  );
};

export default BlogDetails;
