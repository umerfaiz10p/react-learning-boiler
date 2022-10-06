import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {data:blogs,error, isPending} = useFetch('http://localhost:8000/blogs');
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