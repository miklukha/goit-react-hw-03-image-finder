import React, { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export function ImageGallery({ images, onClick }) {
  return (
    <Gallery>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          tags={image.tags}
          image={image.webformatURL}
          largeImg={image.largeImageURL}
          onClick={onClick}
        />
      ))}
    </Gallery>
  );
}
