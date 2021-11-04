import Link from 'next/link';

const Nav = () => {
    return ( 
        <nav>
            <div className="logo">
                <h1>Logo</h1>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/posts"><a>Posts</a></Link>
        </nav>
    );
}
 
export default Nav;