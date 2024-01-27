"use client";
import React from "react";
import { format } from "date-fns";
import RenderMdx from "./RenderMdx";

function BlogDetails({ blogs, slug }) {
  const scrollToHeading = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div className=" bg-black flex justify-around py-6 items-center font-mono font-semibold text-white">
        <time> {format(new Date(blogs.publishedAt), "MMMM dd, yyyy")}</time>
        <span>10 views</span>
        <div>{blogs.readingTime.text}</div>
      </div>
      <div className="grid grid-cols-12  gap-y-8 lg:gap-8 sxl:gap-16 mt-8 px-5 md:px-10">
        <div className="col-span-12  lg:col-span-4">
          <details
            className="border-[1px] border-solid border-black black:border-light text-white bg-black black:text-light rounded-lg p-4 sticky top-6 max-h-[80vh] overflow-hidden overflow-y-auto"
            open
          >
            <summary className="text-lg font-semibold capitalize cursor-pointer">
              Table Of Content
            </summary>
            <ul className="mt-4 font-in text-base">
              {blogs.toc.map((heading) => {
                console.log(heading.slug, heading.level);
                return (
                  <li key={`#${heading.slug}`} className="py-1">
                    <a
                      onClick={() => scrollToHeading(heading.slug)}
                      // href={`#${heading.slug}`}
                      data-level={heading.level}
                      className="data-[level=two]:pl-0  data-[level=two]:pt-2
                                       data-[level=two]:border-t border-solid border-white/40
                                       data-[level=three]:pl-4
                                       sm:data-[level=three]:pl-6
                                       flex items-center justify-start cursor-pointer
                                       
                                       "
                    >
                      {heading.level === "three" ? (
                        <span className="flex w-1 h-1 rounded-full bg-white mr-2">
                          &nbsp;
                        </span>
                      ) : null}

                      <span className="hover:underline">{heading.text}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </details>
        </div>
        <RenderMdx blogs={blogs} />
      </div>
    </>
  );
}

export default BlogDetails;
