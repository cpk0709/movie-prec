import { useEffect , useState } from 'react';
import {useParams} from 'react-router-dom';

const Detail = () => {
    const {id} = useParams();

    const [loading,setLoading] = useState(true);
    const [movie,setMovie] = useState();
    
    const getMovie = async () => {
        const json = await(await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setMovie(json);
        setLoading(false);
    };

    useEffect(() => {
       getMovie();
    },[]);
    
    return (
        <div>
            <h1>Detail!</h1>
            {loading ? (<h2>Loading</h2>) : 
                (
                <div>
                    <h2>{movie.data.movie.title}</h2>
                    <img src={movie.data.movie.medium_cover_image}/>
                    <p>{movie.data.movie.description_full}</p>
                </div>

                )
            }
        </div>

    );
}

export default Detail;