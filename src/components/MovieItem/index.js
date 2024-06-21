// Write your code here
import ReactPlayer from 'react-player'
import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {videoUrl, thumbnailUrl} = movieDetails
  return (
    <div>
      <Popup
        modal
        trigger={
          <img src={thumbnailUrl} className="thumbnailUrl" alt="thumbnail" />
        }
        className="popup-content"
      >
        {close => (
          <div>
            <button
              type="button"
              className="closeButton"
              onClick={() => close()}
              aria-label="btn"
              data-testid="closeButton"
            >
              <IoMdClose size="30" />
            </button>
            <div className="videoContainer">
              <ReactPlayer url={videoUrl} controls />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}
export default MovieItem
