import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import { signIn, signOut, useSession } from "next-auth/client";

const PageHeader = () => {
  const [session, loading] = useSession();
  return (
    <AppBar
      color="secondary"
      component="header"
      position="sticky"
      style={{ padding: "16px" }}
    >
      <Typography variant="h4">zeit</Typography>
      {!session && (
        <>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
      {session && (
        <>
          {session.user.name}{" "}
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </AppBar>
  );
};

export default PageHeader;
