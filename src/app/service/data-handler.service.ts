import { Injectable } from "@angular/core";
import { Category } from "../model/Category";
import { Task } from "../model/Task";
import { TestData } from "../data/TestData";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DataHandlerService {
  // Create the observer
  taskSubject = new BehaviorSubject<Task[]>(TestData.tasks);

  constructor() {}

  getCategories(): Category[] {
    return TestData.categories;
  }

  fillAllTasks() {
    // update observed data
    this.taskSubject.next(TestData.tasks);
  }

  fillTasksByCategory(category: Category | undefined) {
    if (typeof category !== undefined) {
      const tasks = TestData.tasks.filter((task) => task.category === category);
      this.taskSubject.next(tasks);
    } else {
      this.taskSubject.next(TestData.tasks);
    }
  }

  updateCategorySize(category: Category): Number {
    let tasksArr = TestData.tasks.filter((task) => task.category === category);
    category.size = tasksArr.length;
    return tasksArr.length;
  }

  getTasksLength(): Number{
    return TestData.tasks.length;
  }
}
