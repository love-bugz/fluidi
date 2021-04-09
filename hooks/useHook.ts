import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
export default function useTransactions() {
  // fetch the data
  const { data, error } = useSWR("/api/transactions", fetcher);

  return {
    transactions: data,
    isLoading: !error && !data,
    isError: error,
  };
}
