const Menu = require("../../models/menu");

module.exports = {
  index,
  show,
  create,
  delete: deleteOne,
  update
};

async function index(req, res) {
  const menus = await Menu.find({});
  res.status(200).json(menus);
}

async function show(req, res) {
  const menu = await Menu.findById(req.params.id);
  res.status(200).json(menu);
}

async function create(req, res) {
  const menu = await Menu.create(req.body);
  res.status(201).json(menu);
}

async function deleteOne(req, res) {
  const deletedMenu = await Menu.findByIdAndRemove(req.params.id);
  res.status(200).json(deletedMenu);
}

async function update(req, res) {
  const updatedMenu = await Menu.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });
  res.status(200).json(updatedMenu);
}
