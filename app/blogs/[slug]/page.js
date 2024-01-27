import { allBlogs } from "@/.contentlayer/generated";
import BlogDetails from "@/components/Blog/BlogDetails";
import siteMetadata from "@/utils/siteMetaData";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const blogs = allBlogs.find(
    (blog) => blog._raw.flattenedPath === params.slug
  );
  const publishedAt = new Date(blogs.publishedAt).toISOString();
  const modifiedAt = new Date(
    blogs.updatedAt || blogs.publishedAt
  ).toISOString();
  let imageList = [siteMetadata.socialBanner];
  if (blogs.image) {
    imageList =
      typeof blogs.image.filePath === "string"
        ? [siteMetadata.siteUrl + blogs.image.filePath.replace("../public", "")]
        : blogs.image;
  }
  const ogImages = imageList.map((img) => {
    return { url: img.includes("http") ? img : siteMetadata.siteUrl + img };
  });

  const authors = blogs?.author ? [blogs.author] : siteMetadata.author;
  if (!blogs) return;
  return {
    title: blogs.title,
    description: blogs.description,
    openGraph: {
      title: blogs.title,
      description: blogs.description,
      url: siteMetadata + "/blogs" + params.slug,
      siteName: siteMetadata.title,

      images: [
        {
          url: siteMetadata.socialBanner, // Must be an absolute URL
          width: 800,
          height: 600,
        },
      ],
      locale: "en_US",
      type: "article",
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: blogs.title,
      description: blogs.description,
      creator: blogs.author,
      images: [siteMetadata.socialBanner], // Must be an absolute URL
    },
  };
}
export default function BlogPage({ params }) {
  const blogs = allBlogs.find(
    (blog) => blog._raw.flattenedPath === params.slug
  );
  console.log(blogs);
  return (
    <>
      <div className=" mb-8 text-center relative w-full h-[70vh] bg-black">
        <div className="w-full z-10 flex flex-col items-center justify-center absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <a className=" inline-block py-3 px-10 bg-black text-white rounded-full capitalize font-semibold  border-2 border-white hover:scale-105 ease-in-out duration-200">
            {blogs.tags[0]}
          </a>
          <h1 className="inline-block mt-6 font-semibold capitalize text-light text-2xl md:text-3xl lg:text-5xl !leading-normal relative w-5/6">
            {blogs.title}
          </h1>
        </div>
        <Image
          src={blogs.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={blogs.image.blurhashDataUrl}
          alt={blogs.title}
          width={blogs.image.width}
          height={blogs.image.height}
          className="w-full h-[70vh] object-center object-cover -z-10"
          sizes="100vw"
          priority
        />
      </div>
      <div>
        <BlogDetails blogs={blogs} slug={params.slug} />
      </div>
    </>
  );
}
