'use client'

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Paginator from "react-hooks-paginator";

import BlogSidebar from "./BlogSidebar";
import blogData from "@/data/blog/blog.json";
import { getPostByKeyword } from "@/common/postSelect";
import BlogContent from "./BlogContent";

const LayoutBlog = () => {
  const router = useRouter();
  // const search = router.Se;
  const search = router.searchParam
  const pageLimit = 7;
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  useEffect(() => {
    if (!search || search.length === 0) {
      setCurrentData(blogData);
    } else {
      setCurrentData(getPostByKeyword(blogData, search));
    }
  }, [offset, search]);

  return (
    <div className="blog">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-3">
            <BlogSidebar limit={5} popularPostData={blogData} />
          </div>
          <div className="col-12 col-lg-9">
            <BlogContent offset={offset} search={search} data={currentData} />
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