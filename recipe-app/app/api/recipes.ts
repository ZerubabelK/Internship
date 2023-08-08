// import recipe_mock from "@/data/recipe_mock";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log({ req, res });
  res.status(200).json({ name: "John Doe" });
}
