import { Request, Response } from "express";

const showUser = (req: Request, res: Response) => {
  res.render("pages/name", {
    name: req.query.name,
    title: 'Name'
  });
};

const showAge = (req: Request, res: Response) => {
  res.render("pages/age", {
    title: "Idade",
  });
};

const createAge = (req: Request, res: Response) => {
  let age: number | null = null;

  if (req.body.birthdayYear) {
    let currentYear = new Date().getFullYear();
    age = currentYear - parseInt(req.body.birthdayYear as string);
  }
  res.render("pages/age", {
    age,
    title: "Idade",
  });
};

export default {
  showUser,
  showAge,
  createAge,
};
