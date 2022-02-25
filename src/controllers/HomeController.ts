import { Request, Response } from "express";
import { Product } from "../models/Product";

const show = (req: Request, res: Response) => {
  let user = {
    name: "Gleison",
    showWelcome: true,
  };

  let text: Array<string> = ["text1", "text2"];

  res.render("pages/home", {
    user,
    products: Product.getAll(),
    expensives: Product.getByPriceAfter(20),
    text,
    title: 'Home'
  });
};

export default {
  show,
};
