"use client";
import React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";

const mdxComponents = {
  Image,
};
function RenderMdx({ blogs }) {
  const MDXContent = useMDXComponent(blogs.body.code);

  return (
    <div
      className="col-span-12  lg:col-span-8 font-in prose sm:prose-black md:prose-lg max-w-max
    prose-blockquote:bg-green-700/20 
    prose-blockquote:p-2
    prose-blockquote:px-6
    prose-blockquote:border-accent
    prose-blockquote:not-italic
    prose-blockquote:rounded-r-lg

    prose-li:marker:text-accent

    dark:prose-black
    dark:prose-blockquote:border-black
    dark:prose-blockquote:bg-black/20
    dark:prose-li:marker:text-accentDark

    first-letter:text-3xl
    sm:first-letter:text-5xl
    


    "
    >
      {" "}
      <MDXContent components={mdxComponents} />
    </div>
  );
}

export default RenderMdx;
