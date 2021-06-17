import "../styles/globals.css";
import type { AppProps } from "next/app";
import { H } from "highlight.run";

if (typeof window !== "undefined") {
  H.init("REPLACE_ME_WITH_YOUR_ORG_ID");
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
