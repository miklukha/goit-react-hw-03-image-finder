import React from 'react';
import { LoadMoreBtn } from './Button.styled';

export function Button({ onClick }) {
  return <LoadMoreBtn onClick={onClick}>Load more</LoadMoreBtn>;
}
