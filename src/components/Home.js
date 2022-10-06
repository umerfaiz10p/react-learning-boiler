import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'React blog 1', body: 'lorem ipsum...', author: 'umer', id: 1 },
    { title: '10P game Fest!', body: 'lorem ipsum...', author: 'faiz', id: 2 },
    { title: 'React learning FS!', body: 'lorem ipsum...', author: '10P', id: 3 }
  ])

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  let [count, setName] = useState(0);

  useEffect(() => {
    console.log('use effect ran');
  }, [count])

  return (
    <div className="home">
      <p>Number of UseEffect test is {count}</p>
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      <button onClick={() => setName(++count)}>Test UseEffect hook</button>
      <BlogList blogs={blogs.filter(blog => blog.author === 'umer')} title="Umer's Blogs" handleDelete={handleDelete}/>

    </div>
  );
}
 
export default Home;