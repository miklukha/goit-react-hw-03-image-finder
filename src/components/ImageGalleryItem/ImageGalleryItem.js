import React, { Component } from 'react';
import { Item, Image } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    image: this.props.largeImg,
  };

  onClickImg = () => {
    this.props.onClick(this.state);
  };

  render() {
    return (
      <Item onClick={this.onClickImg}>
        <Image src={this.props.image} alt={this.props.tags} />
      </Item>
    );
  }
}
