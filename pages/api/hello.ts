// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { withHighlight } from "./config";

type Data = {
  name: string;
};

// this is the /api/hello route http handler.
async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  // an example of something going wrong
  if (Math.floor(Math.random() * 8) === 0) {
    throw new Error("failed to handle");
  }

  // a random delay to show metrics recording
  await new Promise((r) => setTimeout(r, 1000 * Math.random()));
  res.status(200).json({ name: "John Doe" });
}

export default withHighlight(handler);
