import React, { Component } from 'react';
import { Overlay, ModalImg } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <Overlay>
        <ModalImg>{this.props.children}</ModalImg>
      </Overlay>
    );
  }
}
