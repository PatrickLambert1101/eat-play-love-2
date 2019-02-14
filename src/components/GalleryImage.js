import React from 'react';
import GalleryStyle from './styles/GalleryStyle';
import PreviewCompatibleImage from './PreviewCompatibleImage';
var shortid = require('shortid');

class GalleryImage extends React.Component {
  render() {
    console.log(
      'TCL: GalleryImage -> render -> this.props.gallery',
      this.props.gallery
    );
    return (
      <GalleryStyle>
        {this.props.gallery.map((image, i) => (
          <div key={shortid.generate()}>
            <PreviewCompatibleImage imageInfo={image} />
          </div>
        ))}
      </GalleryStyle>
    );
  }
}

export default GalleryImage;
