import styles from './Inicio.module.css'
import Banner from "componentes/Banner";
import Post from 'componentes/Post';
import posts from 'json/posts.json'

export default function Inicio() {
    return (
        <main>
            <Banner />
            
            <ul className={styles.posts}>
                {posts.map(post => (
                    <li key={post.id}>
                        <Post post={post} />
                    </li>
                ))}
            </ul>

        </main>
    )
}