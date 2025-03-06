import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useSwrFavorites() {
  const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products/favorites`, fetcher);

  return {
    favorites: data,
    isLoading: !error && !data,
    isError: error,
  };
}