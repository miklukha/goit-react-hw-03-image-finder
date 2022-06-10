import React from 'react';
import { Header, SearchForm, Button, Label, Input } from './Searchbar.styled';

export function Searchbar() {
  return (
    <Header>
      <SearchForm>
        <Button type="submit">
          <Label>Search</Label>
        </Button>

        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />

        {/* <input
          class="input"
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        /> */}
      </SearchForm>
    </Header>
  );
}
