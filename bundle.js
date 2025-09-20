class Task {
  constructor(message) {
    this.message = message;
  }
  run() {
    console.log(this.message);
  }
}

class User {
  constructor(task) {
    this.task = task;
  }

  do() {
    this.task.run();
  }
}

const firstTask = new Task('hello world');
const firstUser = new User(firstTask);
firstUser.do();
