import React, { Component } from 'react';
import { Searchbar } from 'components/Searchbar';
import { ImageGallery } from 'components/ImageGallery';
import { Section } from './App.styled';

export class App extends Component {
  state = {
    images: [],
    page: 1, // gallery
    // query: '', // here
  };

  // componentDidMount() {
  //   const { query, page } = this.state;
  //   this.getPhotos(query, page);
  //   document.title = `Gallery - ${query}`;
  //   console.log(this.state.images);
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   const { query, page } = this.state;
  //   if (prevState.page !== this.state.page) {
  //     this.getPhotos(query, page);
  //   }
  // }

  // getPhotos = async (query, page) => {
  //   const data = await ImageService.getImages(query, page);
  //   if (page === 1) {
  //     this.setState({ images: data.photos });
  //     return;
  //   }
  //   this.setState(prevState => ({
  //     images: [...prevState.images, ...data.photos],
  //   }));
  // };

  getImages = async (query, page) => {
    const API_KEY = '26815129-636df5f0482082ec4ff5cd1a9';
    const BASE_URL = 'https://pixabay.com/api/';

    const response = await fetch(
      `${BASE_URL}?q=${query}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    const images = await response.json();
    // const data = images.hits;
    // console.log(data);

    this.setState({ images: images.hits });
    console.log(this.state);

    // this.setState(prevState => ({
    //   images: [...prevState.images, ...data.photos],
    // }));

    // id webformatURL largeImageURL
  };

  render() {
    // this.getImages();
    return (
      <Section>
        <Searchbar onSubmit={this.getImages} />
        <ImageGallery images={this.state.images} />
      </Section>
    );
  }
}
