import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

import ImageUploadPreview from './ImageUploadPreview';

const acceptedFileTypes =
  'image/x-png, image/png, image/jpg, image/jpeg, image/gif';
const acceptedFileTypesArray = acceptedFileTypes
  .split(',')
  .map(item => item.trim());
const imageMaxSize = 100000; //bytes
class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUploadPreviewSrc: null
    };
  }
  verifyFile = files => {
    if (files && files.length > 0) {
      const currentFile = files[0];
      const currentFileType = currentFile.type;
      const currentFileSize = currentFile.size;
      if (currentFileSize > imageMaxSize) {
        alert('File Size is Too Big');
        return false;
      }
      if (!acceptedFileTypesArray.includes(currentFileType)) {
        alert('Unsupported File Type');
        return false;
      }
      return true;
    }
  };

  handleDrop = (acceptedFiles, rejectedFiles) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      const isVerified = this.verifyFile(acceptedFiles);
      if (isVerified) {
        const currentFile = acceptedFiles[0];
        const reader = new FileReader();
        reader.addEventListener(
          'load',
          () => {
            this.setState({
              imageUploadPreviewSrc: reader.result
            });
          },
          false
        );
        reader.readAsDataURL(currentFile);
      }
      console.log(acceptedFiles);
    }
  };
  render() {
    const { imageUploadPreviewSrc } = this.state;
    return (
      <div>
        <Dropzone
          accept={acceptedFileTypes}
          multiple={false}
          maxSize={imageMaxSize}
          onDrop={this.handleDrop}
        >
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here</p>
              </div>
            </section>
          )}
        </Dropzone>
        {imageUploadPreviewSrc !== null ? (
          <ImageUploadPreview source={imageUploadPreviewSrc} />
        ) : null}
      </div>
    );
  }
}

export default ImageUpload;
