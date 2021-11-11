import { useParams, useHistory } from "react-router"
import { useFetch } from "../Hooks/useFetch"
import { useEffect } from "react";

export default function Article() {
    const { id } = useParams()
    const url = 'http://localhost:3000/articles/' + id;
    const {data:article, ispending, error} = useFetch(url)
    const History = useHistory()

    useEffect(() => {
        if(error){
            setTimeout(() => {
                History.push('/')
            }, 2000)
        }
    }, [error, History])

    return (
        <div>
            {ispending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {article && (
                <div>
                    <h2>{article.title}</h2>
                    <p>By {article.author}</p>
                    <p>{article.body}</p>
                </div>
            )}
        </div>
    )
}
