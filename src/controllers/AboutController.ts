import { Request, Response } from "express";

const show = (req: Request, res: Response) => {
  res.render("pages/about", {
    title: "Sobre",
  });
};

export default {
  show,
};
