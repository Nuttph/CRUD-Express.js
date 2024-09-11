exports.create = async (req, res) => {
  try {
    console.log("Hello Create");
  } catch (err) {
    console.log("Controller Create ERORR!@#$ " + err);
  }
};

exports.list = async (req, res) => {
  try {
    console.log("Hello List");
  } catch (err) {
    console.log("Controller List ERORR!@#$ " + err);
  }
};

exports.read = async (req, res) => {
  try {
    console.log("Hello Read (GET:ID)");
  } catch (err) {
    console.log("Controller Read ERORR!@#$ " + err);
  }
};
