import { Request, Response } from "express";

const show = (req: Request, res: Response) => {
  let user = {
    name: "Gleison",
    showWelcome: true,
  };

  let products = [
    { name: "Produto 1", preco: 50 },
    { name: "Produto 2", preco: 20 },
    { name: "Produto 3", preco: 30 },
  ];

  let text: Array<string> = ["text1", "text2"];

  res.render("pages/home", {
    user,
    products,
    text,
  });
};

export default {
  show,
};
