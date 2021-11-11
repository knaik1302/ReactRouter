import { useFetch } from '../Hooks/useFetch'
import { Link } from 'react-router-dom'

//importing style pages
import './Home.css'

export default function Home() {
    const {data:articles, ispending, error} = useFetch('http://localhost:3000/articles')
    return (
        <div className="home">
            <h2>ARTICLES</h2>
                {ispending && <div>Loading....</div>}
                {error && <div>{error}</div>}
                {articles && articles.map((article) => (
                    <div key={article.id} className="card">
                        <h3>{article.title}</h3>
                        <p>{article.author}</p>
                        <Link to={`articles/${article.id}`}>Read more...</Link>
                    </div>
                ))}
        </div>
    )
}
