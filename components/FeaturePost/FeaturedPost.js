import React from "react";
import BlogLayoutOne from "../Blog/BlogLayoutOne";
import BlogLayoutTwo from "../Blog/BlogLayoutTwo";

import { sortBlogs } from "@/utils";

function FeaturedPost({ blogs }) {
  const sortedBlogs = sortBlogs(blogs);
  const blog = sortedBlogs[0];

  return (
    <section className="w-full mt-16 sm:mt-24  md:my-32 px-5 sm:px-10 md:px-24  sxl:px-32 flex flex-col items-center justify-center">
      <h2 className="w-full inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">
        Featured Posts
      </h2>

      <div className=" flex justify-center items-center gap-6  h-[60vh] mt-10 sm:mt-16">
        <article className=" col-span-2  sxl:col-span-1 row-span-2 relative">
          <BlogLayoutOne blog={sortedBlogs[1]} />
        </article>
        <div className=" flex flex-col gap-8 ">
          <article className=" col-span-2 sm:col-span-1 row-span-1 relative">
            <BlogLayoutTwo blog={sortedBlogs[2]} />
          </article>
          <article className="col-span-2 sm:col-span-1 row-span-1 relative">
            <BlogLayoutTwo blog={sortedBlogs[3]} />
          </article>
        </div>
      </div>
    </section>
  );
}

export default FeaturedPost;
