// This function will build all static html pages for each post at build time
export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    const paths = data.map(post => ({
        params: { id: post.id.toString() }
    }));

    return {
        paths,
        fallback: false
    }
}

// This function is called at page load and fetches the post data from the api
// The contect object is like the Request object in express or laravel, which contains the post id from the url
export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();

    return {
        props: {
            post: data
        }
    }
}

const Post = ({ post }) => {
    return ( 
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
     );
}
 
export default Post;