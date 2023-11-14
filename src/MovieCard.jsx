/* eslint-disable react/prop-types */
const Movie = ({movie}) => {
  return (
    <>
     <div className="movie">
          <div>
            <p>{movie.Year}</p>
          </div>
          <div>
            <img
              src={
                movie.Poster !== "N/A"
                  ? movie.Poster
                  : "https://via.placeholder.com/400"
              }
              alt={movie.Title}
            />
          </div>
          <div>
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
          </div>
        </div>
    </>
  )
}
/*
const movie1 = {
    title: "Superman",
    Year: "2021",
    imdbID: "tt4154664",
    media_type: "movie",
    poster_path: "N/A",
  };
*/
export default Movie