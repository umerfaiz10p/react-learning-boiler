import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null)
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogss')
      .then(res => {
        if (!res.ok) { // error coming back from server
          throw Error('could not fetch the data for blogs');
        } 
        return res.json();
      })
      .then(data => {
        setIsPending(false);
        setBlogs(data);
        setError(null);
      })
      .catch(err => {
        // auto catches network / connection error
        setIsPending(false);
        setError(err.message);
      })
    }, 1000);
  }, [])

  return (
    <div className="home">
      { error && <div className="error-class"><h1>{ error }</h1></div>}
      { isPending && <div>Loading...</div> }
      {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
      {blogs && <BlogList blogs={blogs.filter(blog => blog.author === 'umer')} title="Umer's Blogs"/>}
    </div>
  );
}
 
export default Home;