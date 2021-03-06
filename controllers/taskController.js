const mongoose = require("mongoose");
const Task = mongoose.model('Tasks');

exports.listTasks = (req, res) => {
    Task.find({}, (err, task) => {
        if (err)
          res.send(err);
        res.json(task);
    });
};

exports.createTask = (req, res) => {
    const new_task = new Task(req.body);
    new_task.save((err, task) => {
      if (err)
        res.send(err);
      res.json(task);
    });
};

exports.getTask = (req, res) => {
  Task.findById(req.params.taskId, (err, task) => {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.updateTask = (req, res) => {
  Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, (err, task) => {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.deleteTask = (req, res) => {
  Task.remove({
    _id: req.params.taskId
  }, (err, task) => {
    if (err)
      res.send(err);
    res.json({ 
      message: 'Task deleted',
      id: req.params.taskId 
    });
  });
};