// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { redirect } from "next/dist/server/api-utils";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const { title, body } = req.body;
    const blog = { title, body, userId: 1 };
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(blog),
        }
      );
      const data = await response.json();
      console.log(data);
      res.status(200).json(data);
    } catch (error) {
      res.status(400).end();
    }
  }
}
