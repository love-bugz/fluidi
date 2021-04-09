import useSWR from "swr";
import { fetcher } from "./fetcher";

export function useFeed() {
  const { data: feed } = useSWR("/api/feed", fetcher);
  return { feed };
}
