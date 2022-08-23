import { GifObject, Rating } from '../domain';

const API_URL = '//api.giphy.com/v1/gifs/search';

type SearchRequest = {
  query: string;
  limit?: number;
  offset?: number;
  rating?: Rating;
};

type SearchResponse = {
  data: GifObject[];
  pagination: {
    count: number;
    offset: number;
    total_count: number;
  };
};

export const search = ({
  query,
  limit = 10,
  offset = 0,
  rating = 'g',
}: SearchRequest): Promise<SearchResponse> =>
  fetch(
    `${API_URL}?q=${encodeURIComponent(
      query,
    )}&limit=${limit}&offset=${offset}&rating=${rating}&api_key=${
      process.env.REACT_APP_API_KEY
    }`,
  ).then((response) => {
    if (response.status !== 200) {
      throw new Error(response.statusText);
    }

    return response.json();
  });
