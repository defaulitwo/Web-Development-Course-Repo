import MovieCard from "./MovieCard";

function MovieCards()
{
    return (
        <div className="MovieCards">
            <MovieCard name="test" comment="test" stars={1}/>
            <MovieCard name="test" comment="test"/>
        </div>
    );
}

export default MovieCards