function MovieCard(props)
{
    return (
        <div className="MovieCard">
            <h3>
                {props.name}
            </h3>
            <p>
                {props.comment}
            </p>
            {
                []
            }
        </div>
    )
}
export default MovieCard