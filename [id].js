import { useRouter } from "next/router";
import React from "react";

const BlogPostDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1> This is Dynamic page works id is: {id}</h1>
    </div>
  );
};

export default BlogPostDetails;
