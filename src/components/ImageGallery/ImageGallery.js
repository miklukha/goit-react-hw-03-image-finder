import React from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export function ImageGallery({ images }) {
  return (
    <Gallery>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          name={image.tags}
          image={image.webformatURL}
        />
      ))}
    </Gallery>
  );
}
