import React from 'react';
import PropTypes from 'prop-types';
import { Item, Image } from './ImageGalleryItem.styled';
export function ImageGalleryItem({ image, tags, onClick, largeImg }) {
  return (
    <Item onClick={() => onClick(largeImg)}>
      <Image src={image} alt={tags} />
    </Item>
  );
}

ImageGalleryItem.propTypes = {
  image: PropTypes.string.isRequired,
  tags: PropTypes.string,
  onClick: PropTypes.func,
  largeImg: PropTypes.string,
};
