import { Component } from "@angular/core";
import { Task } from "src/app/model/Task";
import { DataHandlerService } from "src/app/service/data-handler.service";
import { Category } from "./../../model/Category";

@Component({
  selector: "app-all-tasks",
  templateUrl: "./all-tasks.component.html",
  styleUrls: ["./all-tasks.component.scss"],
})
export class AllTasksComponent {
  tasks: Task[] = [];

  constructor(private dataHandler: DataHandlerService) {}

  ngOnInit() {
    // subscribe - observe the data
    this.dataHandler.taskSubject.subscribe(tasks => this.tasks = tasks);
  }

  showTasksByCategory(category: Category | undefined) {
    this.dataHandler.fillTasksByCategory(category);
  }

  showAllTasks() {
    this.dataHandler.fillAllTasks();
  }
}
