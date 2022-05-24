import "../styles/globals.css";
import "@highlight-run/react/dist/highlight.css";
import type { AppProps } from "next/app";
import { H } from "highlight.run";
import { ErrorBoundary } from "@highlight-run/react";

H.init("REPLACE_ME_WITH_YOUR_PROJECT_ID", {
  networkRecording: {
    enabled: true,
    recordHeadersAndBody: true,
  },
  tracingOrigins: true,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary
      fallback={
        <>
          <h2>TODO: Add your fallback UI here.</h2>
        </>
      }
    >
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}
export default MyApp;
