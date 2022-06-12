import React, { Component } from 'react';
import { Searchbar } from 'components/Searchbar';
import { ImageGallery } from 'components/ImageGallery';
import { Button } from 'components/Button';
import { Loader } from 'components/Loader';
import { Modal } from 'components/Modal';
import { Section } from './App.styled';

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

  getImages = async query => {
    this.setState({ loading: true });
    this.setState({ query: query });

    const API_KEY = '26815129-636df5f0482082ec4ff5cd1a9';
    const BASE_URL = 'https://pixabay.com/api/';

    const response = await fetch(
      `${BASE_URL}?q=${query}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${this.state.perPage}`
    );
    const images = await response.json();

    if (images.hits.length === 0) {
      this.setState({
        loading: false,
      });
      return alert('Nothing found');
    }

    // fetch(
    //   `${BASE_URL}?q=${query}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    // )
    //   .then(res => res.json())
    //   .then(images => this.setState({ images: images.hits, loading: false }));
    // const images = await response.json();

    if (this.state.page === 1) {
      this.setState({
        images: images.hits,
        loading: false,
        totalHits: images.totalHits,
      });
      return;
    }

    this.setState(prevState => ({
      images: [...prevState.images, ...images.hits],
      loading: false,
      totalHits: images.totalHits,
    }));

    // this.setState({ loading: false });
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
          <Modal>
            <img src={largeImg} alt={query} />
          </Modal>
        )}
      </Section>

      //       if (status === 'idle') {
      //   return <div>Введите имя покемона.</div>;
      // }

      // if (status === 'pending') {
      //   return <PokemonPendingView pokemonName={pokemonName} />;
      // }

      // if (status === 'rejected') {
      //   return <PokemonErrorView message={error.message} />;
      // }

      // if (status === 'resolved') {
      //   return <PokemonDataView pokemon={pokemon} />;
      // }
    );
  }
}
