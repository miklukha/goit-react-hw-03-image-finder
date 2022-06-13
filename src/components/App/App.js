import React, { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Searchbar } from 'components/Searchbar';
import { ImageGallery } from 'components/ImageGallery';
import { Button } from 'components/Button';
import { Loader } from 'components/Loader';
import { Modal } from 'components/Modal';
import { Section } from './App.styled';
import { imageAPI } from 'service/image-api';

export class App extends Component {
  state = {
    images: [],
    page: 1,
    query: '',
    totalHits: '',
    perPage: 12,
    loading: false,
    showModal: false,
    largeImg: '',
  };

  async componentDidUpdate(_, prevState) {
    const { query } = this.state;

    if (prevState.query !== query) {
      this.setState({
        page: 1,
        images: [],
        largeImg: '',
        totalHits: '',
      });
    }

    if (prevState.page !== this.state.page) {
      await this.getImages(query);
    }
  }

  openModal = ({ image }) => {
    this.setState({
      showModal: true,
      largeImg: image,
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
    });
  };

  getImages = async query => {
    const { page, perPage } = this.state;
    this.setState({ query, loading: true });

    try {
      const response = await imageAPI.fetchImage(query, page, perPage);
      const images = await response.json();

      if (images.hits.length === 0) {
        this.setState({
          loading: false,
        });

        throw new Error('Nothing found');
      }

      this.setState(prevState => ({
        images: [...prevState.images, ...images.hits],
        loading: false,
        totalHits: images.totalHits,
      }));
    } catch (error) {
      Notify.failure('Nothing found');
    }
  };

  onLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, totalHits, perPage, showModal, largeImg, query } =
      this.state;

    return (
      <Section>
        <Searchbar onSubmit={this.getImages} />
        {this.state.loading && <Loader />}
        <ImageGallery images={images} onClick={this.openModal} />
        {totalHits > perPage && <Button onClick={this.onLoadMore} />}
        {showModal && (
          <Modal onClose={this.closeModal}>
            <img src={largeImg} alt={query} />
          </Modal>
        )}
      </Section>
    );
  }
}
