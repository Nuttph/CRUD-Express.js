const prisma = require("../prisma/prisma");

exports.create = async (req, res) => {
  try {
    const { name, price } = req.body;
    const newProduct = await prisma.product.create({
      data: {
        name: name,
        price: price,
      },
    });

    res.send(newProduct);
  } catch (err) {
    console.log("Controller Create ERORR!@#$ " + err);
    res.send("Server Error").status(500);
  }
};

exports.list = async (req, res) => {
  try {
    const listProduct = await prisma.product.findMany();
    res.send(listProduct);
    // res.send("Hello List");
  } catch (err) {
    console.log("Controller List ERORR!@#$ " + err);
  }
};

exports.read = async (req, res) => {
  try {
    const { productID } = await req.params;
    const product = await prisma.product.findUnique({
      where: {
        id: Number(productID),
      },
    });
    res.send(product);
  } catch (err) {
    console.log("Controller Read ERORR!@#$ " + err);
  }
};

exports.update = async (req, res) => {
  try {
    const { productId } = req.params;
    const { name, price } = req.body;

    const newProduct = await prisma.product.update({
      where: {
        id: Number(productId),
      },
      data: {
        name: name,
        price: price,
      },
    });
    res.json(newProduct);
  } catch (err) {
    res.status(500);
    console.log("Controller Update ERORR!@#$ " + err);
  }
};

exports.remove = async (req, res) => {
  try {
    res.send("Hello Remove");
  } catch (err) {
    console.log("Controller Remove ERORR!@#$ " + err);
  }
};
