import { Highlight } from "@highlight-run/next";

const highlightOptions = {
  tracingOrigins: true,
  networkRecording: {
    enabled: true,
    recordHeadersAndBody: true
  }
};
export const withHighlight = Highlight(highlightOptions);
