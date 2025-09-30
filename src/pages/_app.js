import "@/styles/globals.css";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Menu />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
