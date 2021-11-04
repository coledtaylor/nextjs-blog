import Link from "next/link"
import { useEffect } from "react"
import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 5000)
    }, [router])

    return ( 
        <div className="not-found">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>You will be redirected shortly</p>
        </div>
    );
}
 
export default NotFound;