exports.create = async (req, res) => {
  try {
    const { name, price } = req.body;
    res.send(`${name} : ${price}`);
  } catch (err) {
    console.log("Controller Create ERORR!@#$ " + err);
  }
};

exports.list = async (req, res) => {
  try {
    res.send("Hello List");
  } catch (err) {
    console.log("Controller List ERORR!@#$ " + err);
  }
};

exports.read = async (req, res) => {
  try {
    const { productID } = await req.params;
    res.send(`Hello Read ${productID}`);
  } catch (err) {
    console.log("Controller Read ERORR!@#$ " + err);
  }
};

exports.update = async (req, res) => {
  try {
    res.send("Hello Update");
  } catch (err) {
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
