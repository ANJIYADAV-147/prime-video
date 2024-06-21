// Write your code here
import './index.css'
import MoviesSlider from '../MoviesSlider'

const actionMovie = 'ACTION'

const comedyMovie = 'COMEDY'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMovieList = moviesList.filter(
    movie => movie.categoryId === actionMovie,
  )

  const comedyMovieList = moviesList.filter(
    movie => movie.categoryId === comedyMovie,
  )

  return (
    <div className="app-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        className="prime-video"
        alt="prime video"
      />
      <div className="moviesContainer">
        <h1 className="heading">Action Movies</h1>
        <MoviesSlider moviesList={actionMovieList} />
        <h1 className="heading">Comedy Movies</h1>
        <MoviesSlider moviesList={comedyMovieList} />
      </div>
    </div>
  )
}
export default PrimeVideo
