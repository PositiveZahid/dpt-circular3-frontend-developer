import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const filePath = path.join(
    process.cwd(),
    "src/data/LHR_CDG_ADT1_TYPE_1.txt"
  );
  const fileContents = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(fileContents);

  res.status(200).json(data);
}
