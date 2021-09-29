import React from 'react';

import ImageGallery from 'react-image-gallery';
import './MyGallery.css'

const images = [
  {
    original: 'https://asset-hosting.s3.us-west-2.amazonaws.com/seaweed-1.jpg',
    thumbnail: 'https://asset-hosting.s3.us-west-2.amazonaws.com/seaweed-1.jpg',
  },
  {
    original: 'https://asset-hosting.s3.us-west-2.amazonaws.com/seaweed-2.jpg',
    thumbnail: 'https://asset-hosting.s3.us-west-2.amazonaws.com/seaweed-2.jpg',
  },
  {
    original: 'https://asset-hosting.s3.us-west-2.amazonaws.com/seaweed-3.jpg',
    thumbnail: 'https://asset-hosting.s3.us-west-2.amazonaws.com/seaweed-3.jpg',
  },
  {
    original: 'https://asset-hosting.s3.us-west-2.amazonaws.com/seaweed-4.jpg',
    thumbnail: 'https://asset-hosting.s3.us-west-2.amazonaws.com/seaweed-4.jpg',
  },
];

class MyGallery extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
};

export default MyGallery;