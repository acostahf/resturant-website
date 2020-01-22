const Wine = require("../../models/wine");

module.exports = {
  index,
  show,
  create,
  delete: deleteOne,
  update
};

async function index(req, res) {
  const wines = await Wine.find({});
  res.status(200).json(wines);
}

async function show(req, res) {
  const wine = await Wine.findById(req.params.id);
  res.status(200).json(wine);
}

async function create(req, res) {
  const wine = await Wine.create(req.body);
  res.status(201).json(wine);
}

async function deleteOne(req, res) {
  const deletedWine = await Wine.findByIdAndRemove(req.params.id);
  res.status(200).json(deletedWine);
}

async function update(req, res) {
  const updatedWine = await Wine.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });
  res.status(200).json(updatedWine);
}
