import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";
const BlogDetail = () => {
    const { id } = useParams();
    const history = useHistory();

    const { data: blog, error, isPending } = useFetch(`http://localhost:8000/blogs/${id}`)
    const handleDelete = () =>{
        fetch(`http://localhost:8000/blogs/${id}`,{
            method: 'DELETE'
        }).then(() => {
            history.push('/')
        })
    }
    return (
        <div className="blog-details">
            <h1>Blog Detail Page</h1>
            {error && <div className="error-class"><h1>{error}</h1></div>}
            {isPending && <div>Loading...</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>Delete Blog</button>
                </article>
                )}
        </div>
    );
}

export default BlogDetail;