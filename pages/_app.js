import Footer from "@/components/Footer";
import MyLayout from "@/components/MyLayout";
import NavBar from "@/components/NavBar";
import "@/styles/globals.scss";

export default function App({ Component, pageProps }) {
  return (
    <>
      <MyLayout>
        <Component {...pageProps} />
      </MyLayout>
    </>
  );
}
