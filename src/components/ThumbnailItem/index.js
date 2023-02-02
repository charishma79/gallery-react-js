// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, updateActiveImage, updateAlt, isActive} = props
  const {thumbnailUrl, thumbnailAltText, imageUrl, imageAltText} = imageDetails

  const onClickThumbnail = () => {
    updateActiveImage(imageUrl)
    updateAlt(imageAltText)
  }
  const activeThumbnailName = isActive ? '' : 'btn'
  return (
    <li className="images-folder">
      <button
        className={`button ${activeThumbnailName}`}
        type="button"
        onClick={onClickThumbnail}
      >
        <img src={thumbnailUrl} className="image" alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
