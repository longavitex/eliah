'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import SocialIcons from "../Other/SocialIcons";
import { blog } from "../../common/variables";
import { convertToSlug } from "../../common/utils";
import blogData from "../../data/blog/blog.json";
import { getCategoryQuantity } from "../../common/postSelect";
import PostCarThree from "../Post/PostCarThree";
import SubscribeEmail from "../Other/SubcribeEmail";

export default function BlogSidebar({ limit, popularPostData }) {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const {
    register: register2,
    handleSubmit: handleSubmit2,
    errors: errors2,
  } = useForm();
  const onSearchSubmit = (data) => {
    router.push(process.env.PUBLIC_URL + `/blog?search=${data.search}`);
  };
  const onNewsSubmit = (data) => console.log(data);
  return (
    <div className="blog-sidebar">
      <div className="blog-sidebar__section -search">
        <form onSubmit={handleSubmit(onSearchSubmit)}>
          <input
            type="text"
            placeholder="Enter keyword"
            name="search"
            {...register('search', { required: true })}
          />
          <button>
            <i className="fas fa-search"></i>
          </button>
        </form>
        <div className="input-validator">
        </div>
      </div>
      <div className="blog-sidebar__section">
        <h5 className="blog-sidebar__title">Follow me</h5>
        <SocialIcons className="-border -round -border--light-bg" />
      </div>
      <div className="blog-sidebar__section -categories">
        <h5 className="blog-sidebar__title">Categories</h5>
        <ul>
          {blog.CATEGORIES.map((item, index) => (
            <li key={index}>
              <Link
                href={process.env.PUBLIC_URL + "/blog?category=[slug]"}
                as={process.env.PUBLIC_URL + "/blog?category=" + item}
              >
                <div>
                  {item} 
                  <span>{getCategoryQuantity(blogData, item)}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="blog-sidebar__section -polular-post">
        <h5 className="blog-sidebar__title">Popular post</h5>
        {popularPostData &&
          popularPostData
            .slice(0, limit)
            .map((post, index) => <PostCarThree key={index} data={post} />)}
      </div>
      <div className="blog-sidebar__section -newsletter">
        <h5 className="blog-sidebar__title">News letter</h5>
        <p>
          Subscribe to our newsletter a nd get our newest updates right on your
          inbox.
        </p>
        <SubscribeEmail
          mailchimpUrl="https://jster.us7.list-manage.com/subscribe/post?u=ed40c0084a0c5ba31b3365d65&id=ec6f32bf5e"
          placeholder="Enter your email"
          btnContent="Subcribe"
          className="blog-sidebar-newsletter"
        >
          <label htmlFor="agree">
            <input type="checkbox" name="agree" id="agree" />I agree to the
            terms & conditions
          </label>
        </SubscribeEmail>
      </div>
    </div>
  );
}
