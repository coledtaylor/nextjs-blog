import Link from "next/link"

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts') 
    const data = await res.json()

    return {
        props: {
            posts: data
        }
    }
}

const Posts = ({ posts }) => {
    return ( 
        <div>
            <h1>All Posts</h1>
            {posts.map(post => (
                <Link href={`/posts/${post.id}`} key={post.id}>
                    <a>
                        <div className="post-card">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                    </a>
                </Link>
            ))}
        </div>
     );
}
 
export default Posts;