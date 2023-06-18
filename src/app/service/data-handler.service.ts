import { Injectable } from "@angular/core";
import { Category } from "../model/Category";
import { Task } from "../model/Task";
import { TestData } from "../data/TestData";

@Injectable({
  providedIn: "root",
})
export class DataHandlerService {
  constructor() {}

  getCategories(): Category[] {
    return TestData.categories;
  }

  getTasksByCategory(category: Category | undefined): Task[] {
    if (typeof category !== undefined) {
      return TestData.tasks.filter((task) => task.category === category);
    }

    return TestData.tasks;
  }

  getAllTasks(): Task[] {
    const tasksArr = TestData.tasks;

    return tasksArr;
  }

  updateCategorySize(category: Category) {
    let tasksArr = TestData.tasks.filter((task) => task.category === category);
    category.size = tasksArr.length;
  }
}
