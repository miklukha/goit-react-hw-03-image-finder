import PropTypes from 'prop-types';

const API_KEY = '26815129-636df5f0482082ec4ff5cd1a9';
const BASE_URL = 'https://pixabay.com/api/';

function fetchImage(query, page, perPage) {
  const searchParams = new URLSearchParams({
    q: query,
    page: page,
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: perPage,
  });

  return fetch(`${BASE_URL}?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response;
  });
}

export const imageAPI = {
  fetchImage,
};

fetchImage.propTypes = {
  query: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
};
