import { TrackingProvider } from "../Context/TrackingContext";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

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
