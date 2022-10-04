import React from "react";
import { useParams, useLocation } from "react-router-dom";

const Blog = () => {
  const { title } = useParams();
  const location = useLocation();
  const { body } = location.state;
  // const [bodyData, setBodyData] = useState("")

  // useEffect(()  =>{
  // const blogData =  blogsData.filter((blog)  => blog.title === title)

  // setBodyData(blogData[0].body)
  // }, [])

  return (
    <div>
      <h1>{title}</h1>
      <p>{body.slice(0, 500)} </p>
      <p>{body.slice(501, 5900)} </p>
    </div>
  );
};

export default Blog;
