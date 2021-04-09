import Head from "next/head";
import PageHeader from "../components/PageHeader";
import HomeFeed from "../components/HomeFeed";
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

/* CSR
1. User requests page 
2. Server sends back page
3. User on component mount requests data
4. Server sends back data
*/

/* SSR
1. User requests page
2. Server sends back page WITH data
*/
