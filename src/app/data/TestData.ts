import { Priority } from "../model/Priority";
import { Task } from "../model/Task";
import { Category } from "../model/Category";

export class TestData {
  static categories: Category[] = [
    { id: 1, title: "work", size:0 },
    { id: 2, title: "hobby", size:0 },
    { id: 3, title: "learning", size:0 },
    { id: 4, title: "any", size:0 },
    { id: 5, title: "important", size:0 },
  ];

  static priorities: Priority[] = [
    { id: 1, title: "importantly", color: "#F86F03" },
    { id: 2, title: "necessary", color: "#FFA41B" },
    { id: 3, title: "low", color: "#525FE1" },
  ];

  static tasks: Task[] = [
    {
      id: 1,
      title: "Im first task!",
      completed: false,
      priority: TestData.priorities[1],
      category: TestData.categories[4],
      date: new Date(new Date().toUTCString() + "-0"), // '-0' to get GMT0 date
    },

    {
      id: 2,
      title: "Im 2 task!",
      completed: false,
      priority: TestData.priorities[1],
      category: TestData.categories[3],
      date: new Date(new Date().toUTCString() + "-0"), // '-0' to get GMT0 date
    },
    {
      id: 3,
      title: "Im 3 task!",
      completed: false,
      priority: TestData.priorities[0],
      category: TestData.categories[1],
      date: new Date(new Date().toUTCString() + "-0"), // '-0' to get GMT0 date
    },
    {
      id: 4,
      title: "Im 4 task!",
      completed: true,
      priority: TestData.priorities[2],
      category: TestData.categories[4],
      date: new Date(new Date().toUTCString() + "-0"), // '-0' to get GMT0 date
    },
    {
      id: 5,
      title: "Im 5 task!",
      completed: false,
      priority: TestData.priorities[1],
      category: TestData.categories[4],
      date: new Date(new Date().toUTCString() + "-0"), // '-0' to get GMT0 date
    },
  ];
}
