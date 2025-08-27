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
        a.priority - b.priority;
      } else {
        b.priority - a.priority;
      }
    });
  },
};

ToDoList.addTask('помыть полы', 2);
console.log(ToDoList);
ToDoList.removeTask(1);
console.log(ToDoList);
ToDoList.updateTask(2, 'подмести', 1);
console.log(ToDoList);
ToDoList.addTask('потанцевать', 3);
console.log(ToDoList);
ToDoList.sortByPriority();
// console.log(ToDoList);
// ToDoList.sortByPriority(false);
console.log(ToDoList);
