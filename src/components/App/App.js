import React, { Component } from 'react';
import { Searchbar } from 'components/Searchbar';
import { Section } from './App.styled';

export class App extends Component {
  state = {
    page: 1, // gallery
    // query: '', // here
  };

  getImages = query => {
    console.log(query);
    const API_KEY = '26815129-636df5f0482082ec4ff5cd1a9';
    const BASE_URL = 'https://pixabay.com/api/';

    fetch(
      `${BASE_URL}?q=${query}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(res => res.json())
      .then(console.log);

    // id webformatURL largeImageURL
  };

  render() {
    // this.getImages();
    return (
      <Section>
        <Searchbar onSubmit={this.getImages} />
      </Section>
    );
  }
}
