const router = require("express").Router();

const db = require("../database/db");

// create product router

router.post("/create", (req, res) => {
  //   console.log(req.body, "created");
  const { name, price, brand } = req.body;
  const product = db.create(name, price, brand);
  res.status(201).json({ message: "product created successfully", product });
});

// get all products
router.get("", (req, res) => {
  const products = db.find();
  res.status(200).json(products);
});

// find one product
router.get("/pro/:id", (req, res) => {
  const id = req.params.id;
  const product = db.findById(id);
  console.log(product);
  res.status(200).json(product);
});

// update product

router.patch("/update/:id", (req, res) => {
  const { name, price, brand } = req.body;
  const product = db.updateById(req.params.id, req.body);
  res.status(201).json({ message: "product updated successfully", product });
});

// delete product

router.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  const product = db.deleteProduct(id);
  if (!id) {
    const product = this.data.filter((item) => item.id !== id);
    return product;
  }

  // if (!product) {
  //   return res.status(400).json(product);
  // }

  res.status(201).json(product);
  // if (product) {
  //   console.log(product);
  //   let deletep = deletep.filter((item) => item.id !== id);
  //   console.log(product);
  //   res.status(201).json(product);
  // } else {
  //   res.status(404).json({ message: "something is wrong" });
  // }
  // console.log(product);
});

module.exports = router;
