import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Item, Image } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    image: this.props.largeImg,
  };

  onClickImg = () => {
    this.props.onClick(this.state);
  };

  render() {
    const { image, tags } = this.props;

    return (
      <Item onClick={this.onClickImg}>
        <Image src={image} alt={tags} />
      </Item>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.string.isRequired,
  tags: PropTypes.string,
  onClick: PropTypes.func,
  largeImg: PropTypes.string,
};
