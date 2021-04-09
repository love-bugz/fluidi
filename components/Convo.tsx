import { Card, Typography, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    padding: 12,
    height: 160,
    width: "100%",
    borderBottom: "1px solid darkslategray",
  },
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  bottomContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  speakersWrapper: {
    display: "flex",
    flexDirection: "column",
  },
  speakersContainer: {
    width: "35%",
    display: "flex",
  },
});

const Convo = ({ title, author }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <div className={classes.container}>
        <Typography variant="h6">{title}</Typography>
        <div className={classes.speakersWrapper}>
          <Typography variant="body1">Speakers:</Typography>

          <div className={classes.bottomContainer}>
            <div className={classes.speakersContainer}></div>
            <div>
              <span>PLAY</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Convo;
