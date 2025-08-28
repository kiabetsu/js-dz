const ToDoList = {
  tasks: [
    {
      id: 1,
      title: 'Помыть посуду',
      priority: 1,
    },
  ],
  getIndex: function (id) {
    return this.tasks.findIndex((task) => task.id === id);
  },
  addTask: function (title, priority) {
    const id = this.tasks.at(-1).id + 1;
    this.tasks.push({ id, title, priority });
  },
  removeTask: function (id) {
    const taskIndex = this.getIndex(id);
    this.tasks.splice(taskIndex, 1);
  },
  updateTask: function (id, title, priority) {
    const taskIndex = this.getIndex(id);
    this.tasks[taskIndex] = {
      id: id,
      title: title ? title : this.tasks[taskIndex].title,
      priority: priority ? priority : this.tasks[taskIndex].priority,
    };
  },
  sortByPriority: function (ASC = true) {
    this.tasks.sort((a, b) => {
      if (ASC) {
        return a.priority - b.priority;
      } else {
        return b.priority - a.priority;
      }
    });
  },
};

const newTask = {
  tasks: [
    {
      id: 1,
      name: 'тест',
      description: 'описание',
      order: 0,
    },
  ],
};

newTask.getIndex = ToDoList.getIndex;
newTask.addTask = ToDoList.addTask;
newTask.removeTask = ToDoList.removeTask;
newTask.updateTask = ToDoList.updateTask;
newTask.sortByPriority = ToDoList.sortByPriority;

newTask.getIndex(0);
newTask.addTask('test2', 2);
newTask.removeTask(0);
newTask.updateTask(1, 'test update', 3);
newTask.sortByPriority();

console.log(newTask);

console.log(newTask);
