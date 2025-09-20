import { Task } from './task.js';
import { User } from './user.js';

const firstTask = new Task('hello world');
const firstUser = new User(firstTask);
firstUser.do();
