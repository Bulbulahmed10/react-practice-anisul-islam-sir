import React, { useState } from "react";
import { Link } from "react-router-dom";

import { blogsData } from "../blogsData";

const Blogs = () => {
  const [blogs, setBlogs] = useState(blogsData);

  const truncateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div>
      <h1>Blogs Page</h1>
      <section>
        {blogs.map((blog) => {
          const { id, title, body } = blog;
          return (
            <article key={id}>
              <h3> {title} </h3>
              <p>{truncateString(body, 100)} </p>
              <Link to={title} state={{body}}>
                Learn More
              </Link>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Blogs;
