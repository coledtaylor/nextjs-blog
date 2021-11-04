import Link from 'next/link'
import home from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
        <h1 className={home.title}>Home</h1>
        <p className={home.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, veniam deleniti natus aliquid nulla expedita placeat cupiditate dolores delectus animi distinctio sed at consectetur ratione exercitationem nemo nam dolore. Deserunt!</p>
        <p className={home.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit repellat in consequatur, adipisci qui labore deserunt est rem, minus laborum soluta sit eveniet doloribus harum. Ea quasi at dolorum blanditiis.</p>

        <Link href="/posts">
            <a className={home.btn}>See Posts</a>
        </Link>
    </div>
  )
}
