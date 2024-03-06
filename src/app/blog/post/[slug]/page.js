'use client'

import { useRouter } from "next/navigation";

import data from "@/data/blog/blog.json";
import LayoutFour from "@/components/Layout/LayoutFour";
import { getPostBySlug } from "@/common/postSelect";
import BlogSidebar from "@/components/Blog/BlogSidebar";
import PostContent from "@/components/Blog/PostContent";
import InstagramTwo from "@/components/Sections/Instagram/InstagramTwo";

export default function ({ params: { slug } }) {
  const router = useRouter();

  // Decode URL
  const decodedSlug = decodeURIComponent(slug);

  // Xử lý động với dấu ' và "
  const cleanedSlug = decodedSlug.replace(/['"]/g, "'");
  console.log(cleanedSlug);

  const foundPost = getPostBySlug(data, cleanedSlug);
  console.log(foundPost);
  return (
    foundPost !== null && (
      <LayoutFour tilte={foundPost.title}>
        <div className="post">
          <div className="post__cover">
            <img src={foundPost.coverImage} alt={foundPost.title} />
          </div>
          <div className="post__body">
            <div className="container">
              <div className="row no-gutters">
                <div className="col-12 col-md-3">
                  <div className="post__sidebar">
                    <BlogSidebar limit={5} popularPostData={data} />
                  </div>
                </div>
                <div className="col-12 col-md-9">
                  <div className="post__content">
                    <PostContent data={foundPost} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <InstagramTwo />
      </LayoutFour>
    )
  );
}
