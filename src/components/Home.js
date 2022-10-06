import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'React blog 1', body: 'lorem ipsum...', author: 'umer', id: 1 },
    { title: '10P game Fest!', body: 'lorem ipsum...', author: 'faiz', id: 2 },
    { title: 'React learning FS!', body: 'lorem ipsum...', author: '10P', id: 3 }
  ])

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" />
    </div>
  );
}
 
export default Home;