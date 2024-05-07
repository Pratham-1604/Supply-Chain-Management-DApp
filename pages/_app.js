import { TrackingProvider } from "../Context/TrackingContext";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import "../styles/globals.css";
export default function App({ Component, pageProps }) {
  return (
    <>
      <TrackingProvider>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </TrackingProvider>
    </>
  );
}
