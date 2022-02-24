import { Request, Response } from "express";

const show = (req: Request, res: Response) => {
  res.render("pages/about");
};

export default {
  show,
};
