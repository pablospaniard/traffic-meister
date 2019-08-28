import React from 'react'
import { string } from 'prop-types'
import ImageLoader from 'react-load-image'

const Image = ({ src, alt }) => {
  return (
    <ImageLoader src={src}>
      <img alt={alt} />
      <div>image is not available</div>
      <div />
    </ImageLoader>
  )
}

Image.propTypes = {
  src: string.isRequired,
  alt: string.isRequired
}

export default Image
