import React from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export function ImageGallery({ images, onClick }) {
  return (
    <Gallery>
      {images.map(({ id, tags, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          tags={tags}
          image={webformatURL}
          largeImg={largeImageURL}
          onClick={onClick}
        />
      ))}
    </Gallery>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onClick: PropTypes.func,
};
