import "../styles/globals.css";
import "../styles/page.scss";
import "../styles/nav.scss";
import "../fonts/fonts.scss";
import "../styles/about.scss";
import "../styles/steps.scss";
import "../styles/Programming_technologies.scss";
import "../styles/Questions.scss";
import "../styles/Review.scss";
import "../styles/Gallery.scss";
import "../styles/Contact_us.scss";
import "../styles/footer.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
