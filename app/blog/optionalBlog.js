import { useState } from 'react';
// import { connectToDatabase } from '../../server/database';

function OptionalBlog() {
  const [authorName, setAuthorName] = useState('');
  const [blogTitle, setBlogTitle] = useState('');
  const [blog, setBlogContent] = useState('');
  const [blogs, setNewBlog] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();

    const newBlog = {
      author: authorName,
      title: blogTitle,
      content: blog,
    };
    await setNewBlog((prevBlogs) => [...prevBlogs, newBlog]);

    setAuthorName('');
    setBlogTitle('');
    setBlogContent('');
  }

  return (
    <div className="bg-blue-100">
      <p>Write a new Blog</p>
      <hr />

      <div className="py-24 px-8 bg-gray-100 rounded shadow">
        <form onSubmit={handleSubmit} action="">
          <label htmlFor="authorName">Your Name :</label>
          <input
            value={authorName}
            name="authorName"
            placeholder="..."
            className="bg-gray-200 block"
            id="authorName"
            type="text"
            onChange={(e) => setAuthorName(e.target.value)}
          />
          <label htmlFor="title">Blog Title :</label>
          <input
            value={blogTitle}
            name="blogTitle"
            placeholder="..."
            className="bg-gray-200 block"
            id="title"
            type="text"
            onChange={(e) => setBlogTitle(e.target.value)}
          />
          <label htmlFor="blog">Content :</label>
          <textarea
            value={blog}
            name="blog"
            placeholder="..."
            className="bg-gray-200 block"
            id="blog"
            type="text"
            onChange={(e) => setBlogContent(e.target.value)}
          />

          <button
            className="bg-red-600 my-4 p-2 hover:bg-red-500 rounded shadow text-white"
            type="submit"
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
}
