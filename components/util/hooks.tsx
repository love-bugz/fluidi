import useSWR from "swr";
import { fetcher } from "./fetcher";

export function useFeed() {
  const baseUrl = process.env.baseURL;
  //   const { data: feed } = useSWR("/api/feed", fetcher);
  //   return { feed };
  //   const data = fetch(`${baseUrl}/api/v1/feed`);
  const data = [
    {
      id: "uuid234",
      createdAt: new Date(),
      createdBy: {
        handle: "DixieChips",
        icon: null,
      },
      title: "A new hope?",
      text:
        "So I was thinking, what if all of the Star Wars movies were actually meant to be played in sequential order? Like what if Luke is actually Darth Vader's father? Weird, right?",
    },
    {
      id: "uuid456",
      createdAt: new Date("January 4, 2021"),
      createdBy: {
        handle: "MasterSargent",
        icon: null,
      },
      title: "So I was taking a walk",
      text: "the other day",
    },
  ];
  return { feed: data };
}
