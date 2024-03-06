'use client'

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Paginator from "react-hooks-paginator";

import BlogSidebar from "./BlogSidebar";
import blogData from "@/data/blog/blog.json";
import { getPostByKeyword, getPosts } from "@/common/postSelect";
import BlogContent from "./BlogContent";

const LayoutBlog = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const category = searchParams.get("category");
  const pageLimit = 7;
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  
  useEffect(() => {
    if (!search || search.length === 0) {
      if (!category || category.length === 0) {
        setCurrentData(blogData);
      } else {
        setCurrentData(getPosts(blogData, category));
      }
    } else {
      setCurrentData(getPostByKeyword(blogData, search));
    }
  }, [offset, search, category]);

  return (
    <div className="blog">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-3">
            <BlogSidebar limit={5} popularPostData={blogData} />
          </div>
          <div className="col-12 col-lg-9">
            <BlogContent offset={offset} search={search} category={category} data={currentData} />
            <Paginator
              pageContainerClass="paginator"
              totalRecords={currentData.length}
              pageLimit={pageLimit}
              pageNeighbours={2}
              setOffset={setOffset}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default LayoutBlog