export default (req, res) => {
  const feed = [
    {
      text:
        "Wow not having to configure and transpile typescript is one of the best parts of next.js",
      author: { username: "john" },
    },
    {
      text:
        "I'm a firm believer that dark mode should be a universal default on the web",
      author: { username: "jill" },
    },
  ];
  res.json(feed);
};
