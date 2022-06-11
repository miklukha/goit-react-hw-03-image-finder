import React, { Component } from 'react';
import { Searchbar } from 'components/Searchbar';
import { ImageGallery } from 'components/ImageGallery';
import { Button } from 'components/Button';
import { Section, LoaderWrapper } from './App.styled';
import { BallTriangle } from 'react-loader-spinner';

export class App extends Component {
  state = {
    images: [],
    page: 1,
    query: '',
    loading: false,
  };

  async componentDidUpdate(_, prevState) {
    const { query } = this.state;

    if (prevState.page !== this.state.page) {
      await this.getImages(query);
    }
  }

  getImages = async query => {
    this.setState({ loading: true });
    this.setState({ query: query });

    const API_KEY = '26815129-636df5f0482082ec4ff5cd1a9';
    const BASE_URL = 'https://pixabay.com/api/';

    const response = await fetch(
      `${BASE_URL}?q=${query}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    const images = await response.json();

    // fetch(
    //   `${BASE_URL}?q=${query}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    // )
    //   .then(res => res.json())
    //   .then(images => this.setState({ images: images.hits, loading: false }));
    // const images = await response.json();

    if (this.state.page === 1) {
      this.setState({ images: images.hits, loading: false });
      return;
    }

    this.setState(prevState => ({
      images: [...prevState.images, ...images.hits],
      loading: false,
    }));

    // this.setState({ loading: false });
  };

  onLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images } = this.state;

    return (
      <Section>
        <Searchbar onSubmit={this.getImages} />
        {this.state.loading && (
          <LoaderWrapper>
            <BallTriangle
              heigth="100"
              width="100"
              color="grey"
              ariaLabel="loading-indicator"
            />
          </LoaderWrapper>
        )}
        <ImageGallery images={images} />
        {images.length !== 0 && <Button onClick={this.onLoadMore} />}
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
