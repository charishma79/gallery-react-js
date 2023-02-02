// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, updateActiveImage, updateAlt} = props
  const {thumbnailUrl, thumbnailAltText, imageUrl, imageAltText} = imageDetails

  const onClickThumbnail = () => {
    updateActiveImage(imageUrl)
    updateAlt(imageAltText)
  }

  return (
    <li className="images-folder">
      <button className="button" type="button" onClick={onClickThumbnail}>
        <img src={thumbnailUrl} className="image" alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
