'use client';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import blogs from './blogs';
import Footer from '../components/Footer';
export default function Blog() {
  // function clap() {
  //   setClap((prevClap) => prevClap + 1);
  // }
  // function downvote() {
  //   setDownvote((prevDownvote) => prevDownvote - 1);
  // }
  // console.log(blogs);
  return (
    <div className="parentDiv  mdpx-12 bg-red-200">
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 pb-40">
        {blogs?.map((blog, key) => {
          return (
            <div
              key={key}
              className="blogDiv m-6 py-12 px-8 bg-gray-100 rounded-lg shadow-xl hover:-translate-y-1 duration-200"
            >
              <p className="text-lg">{blog.title}</p>
              <p className="text-sm ">
                by{' '}
                <span className="font-bold text-yellow-600">{blog.author}</span>
              </p>
              <p className="text-base my-2 rounded p-4 bg-gray-200">
                {blog.content}
              </p>
              <div>
                <button
                  // onClick={clap}
                  className="text-orange-600 mx-2 px-2 rounded-lg shadow-sm active:translate-y-1 focus:bg-orange-600 focus:text-white"
                >
                  clap {blog.clap}
                </button>
                <button
                  // onClick={downvote}
                  className="text-sky-700 mx-2 px-2 rounded-lg shadow-sm active:translate-y-1 focus:bg-sky-700 focus:text-white"
                >
                  Downvote {blog.downVote}
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
