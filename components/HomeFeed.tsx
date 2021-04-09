import Convo from "./Convo";
import { useFeed } from "./util/hooks";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    padding: 12,
  },
});

function HomeFeed() {
  const classes = useStyles();
  const { feed } = useFeed();

  if (!feed) {
    return <div>Looading</div>;
  }

  return (
    <main className={classes.root}>
      {feed.map(({ id, text, author }) => {
        return <Convo key={id} title={text} author={author.username} />;
      })}
    </main>
  );
}

export default HomeFeed;
