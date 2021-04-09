import Head from "next/head";
import { useRouter } from "next/router";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: 12,
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
  })
);

export default function LandingPage() {
  const classes = useStyles();
  const router = useRouter();

  return (
    <>
      <Head>
        <title key="title-lucid">Fluidi</title>
        <link key="icon-favicon" rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@200&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Paper className={classes.root} component="main">
        <div>
          <Typography variant="h1">fluidi,</Typography>
          <Typography variant="h4">a new way to socialize</Typography>
          <Divider variant="fullWidth" />
        </div>
        <Card>
          <Button onClick={() => router.push("/home")}>
            Tap here to join the conversation
          </Button>
        </Card>
      </Paper>
    </>
  );
}
