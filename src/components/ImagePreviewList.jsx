import React from 'react';
import ImageUploadPreview from './ImageUploadPreview';
const ImagePreviewList = ({ source }) => {
  let previewsList = source.map((image, k) => (
    <ImageUploadPreview
      source={image.imgSrc}
      key={k}
      previewUrl={image.previewUrl}
    />
  ));
  return previewsList;
};

export default ImagePreviewList;
