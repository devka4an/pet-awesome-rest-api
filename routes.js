const taskController = require("./controllers/taskController");

module.exports = (app) => {
    app.route('/tasks')
        .get(taskController.listTasks)
        .post(taskController.createTask);

    app.route('/tasks/:taskId')
        .get(taskController.getTask)
        .put(taskController.updateTask)
        .delete(taskController.deleteTask);
};
