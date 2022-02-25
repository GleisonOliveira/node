import { Request, Response } from "express";

const show = (req: Request, res: Response) => {
  res.render("pages/contact", {
    title: "Contato",
  });
};

export default {
  show,
};
