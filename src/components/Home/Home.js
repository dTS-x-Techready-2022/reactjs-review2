import { Button, Card } from "@mui/material";
import { Container } from "@mui/system";
import { Layout } from "../Layout/Layout";
import { signingOut } from "../../utils/firebase/signout";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

export const Home = () => {
  const { setUser } = useContext(AuthContext);

  const signOut = async () => {
    const signedOut = await signingOut();
    if (!signedOut.message) {
      setUser(null);
    }
  };

  return (
    <Layout>
      <Container style={{ padding: "4rem", maxWidth: 400 }}>
        <Card
          variant="outlined"
          style={{ padding: "2rem", textAlign: "center" }}
        >
          <p>Email</p>
          <Button variant="contained" onClick={signOut}>
            SignOut
          </Button>
        </Card>
      </Container>
    </Layout>
  );
};
