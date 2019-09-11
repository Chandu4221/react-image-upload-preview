import React from 'react';
import './ImageUploadPreview.css';
const ImageUploadPreview = ({ source }) => (
  <div>
    <img src={source} alt="preview" className="image-preview" />
  </div>
);
export default ImageUploadPreview;
