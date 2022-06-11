import React from 'react';
import { Item, Image } from './ImageGalleryItem.styled';

export function ImageGalleryItem({ name, image }) {
  return (
    <Item>
      <Image src={image} alt={name} />
    </Item>
  );
}
