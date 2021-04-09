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
      {feed.map(
        ({ id, title, text, createdAt, createdBy: { handle, icon } }) => {
          return (
            <Convo
              key={id}
              id={id}
              title={title}
              text={text}
              handle={handle}
              icon={icon}
              createdAt={createdAt}
            />
          );
        }
      )}
    </main>
  );
}

export default HomeFeed;
