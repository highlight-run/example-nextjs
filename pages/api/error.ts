import type { NextApiRequest, NextApiResponse } from "next";

import { withHighlight } from "../../../highlight/highlight-next/src/util/withHighlight";

function handler(req: NextApiRequest, res: NextApiResponse) {
  throw new TypeError();
}

export default withHighlight(handler);
