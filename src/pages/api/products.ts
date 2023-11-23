import { getProductsList } from "@/data/mockProducts";
import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const page = +(req.query.page || 1);
  return res.status(200).json(getProductsList(page, 10));
};
