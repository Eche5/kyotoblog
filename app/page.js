import React from "react";
import { allBlogs } from "../.contentlayer/generated";
import HomeCoverSection from "@/components/Home/HomeCoverSection";
import FeaturedPost from "@/components/FeaturePost/FeaturedPost";
function page() {
  return (
    <div>
      <HomeCoverSection blogs={allBlogs} />
      <FeaturedPost blogs={allBlogs} />
    </div>
  );
}

export default page;
