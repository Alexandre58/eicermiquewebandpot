import { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { UserContext } from "@/context/UserContext";
import AsideProfil from "./AsideProfil";
import Head from "next/head";
const MyLayout = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div>
        <Head>
          <link rel="shortcut icon" href="/favicon-32x32.png" />
        </Head>
        <NavBar />
        {children}
        <Footer />
      </div>
    </UserContext.Provider>
  );
};

export default MyLayout;
