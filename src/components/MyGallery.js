import React from 'react';

import ImageGallery from 'react-image-gallery';
import './MyGallery.css'

const images = [
  {
    original: 'https://asset-hosting.s3.us-west-2.amazonaws.com/image-1.png',
    thumbnail: 'https://asset-hosting.s3.us-west-2.amazonaws.com/image-1.png',
  },
  {
    original: 'https://asset-hosting.s3.us-west-2.amazonaws.com/image-two.png',
    thumbnail: 'https://asset-hosting.s3.us-west-2.amazonaws.com/image-two.png',
  },
  {
    original: 'https://asset-hosting.s3.us-west-2.amazonaws.com/image-three.jpg',
    thumbnail: 'https://asset-hosting.s3.us-west-2.amazonaws.com/image-three.jpg',
  },
];

class MyGallery extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
};

export default MyGallery;