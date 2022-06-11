import React from 'react';
import { Item, Image } from './ImageGalleryItem.styled';

export function ImageGalleryItem({ tags, image }) {
  return (
    <Item>
      <Image src={image} alt={tags} />
    </Item>
  );
}
