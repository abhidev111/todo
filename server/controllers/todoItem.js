const TodoItem = require("../models").TodoItem;

module.exports = {
  async create(req, res) {
//     return TodoItem.create({
//       content: req.body.content,
//       todoId: req.params.todoId,
//     })
//       .then((todoItem) => res.status(201).send(todoItem))
//       .catch((error) => res.status(400).send(error));
        
    const todoitem = await TodoItem.create({
      content: req.body.content,
      todoId: req.params.todoId,
    })
        res.send(todoitem);
  },
};
