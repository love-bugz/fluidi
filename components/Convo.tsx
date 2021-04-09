import { Card, Typography, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";

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
    maxHeight: "1px", //  WTF is this doing?? How??
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

interface Props {
  id: string;
  title: string;
  handle: string;
  text: string;
  createdAt: Date;
  icon: string;
}

const Convo = ({ id, title, handle, text, createdAt, icon }: Props) => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Card className={classes.root} onClick={() => router.push(`/feed/${id}`)}>
      <div className={classes.container}>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2">{text}</Typography>
        <div className={classes.speakersWrapper}>
          <Typography variant="body1">Speakers:</Typography>

          <div className={classes.bottomContainer}>
            <div className={classes.speakersContainer}></div>
            <div>
              <Typography>{createdAt.toLocaleDateString()}</Typography>
              <span>PLAY</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Convo;
