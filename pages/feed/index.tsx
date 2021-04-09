import Head from "next/head";
import PageHeader from "../../components/PageHeader";
import HomeFeed from "../../components/HomeFeed";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { ServerStyleSheets } from "@material-ui/core/styles";

const sheets = new ServerStyleSheets();

const useStyles = makeStyles((theme: Theme) => createStyles({}));

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title key="title-lucid">Lucid</title>
        <link key="icon-favicon" rel="icon" href="/favicon.ico" />
      </Head>
      <PageHeader />
      <HomeFeed />
    </>
  );
}
