import "../styles/globals.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { wrapper } from "../redux/store";
import Head from "next/head";
import Footer from "../components/footer/Footer";
import NavbarComponent from "../components/navbar/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script
          src="https://kit.fontawesome.com/bd43ee06c8.js"
          crossorigin="anonymous"
        ></script>
        <meta name="theme-color" content="#1e4c6b" />
      </Head>
      {/* <NavbarComponent /> */}
      <Component {...pageProps} />
      {/* <Footer /> */}
    </>
  );
}

export default wrapper.withRedux(MyApp);
