import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { Header, SearchForm, Button, Input } from './Searchbar.styled';

export function Searchbar() {
  return (
    <Header>
      <SearchForm>
        <Button type="submit">
          <BsSearch />
        </Button>

        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Header>
  );
}
