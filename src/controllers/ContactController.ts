import { Request, Response } from "express";

const show = (req: Request, res: Response) => {
  res.render("pages/contact");
};

export default {
  show,
};
