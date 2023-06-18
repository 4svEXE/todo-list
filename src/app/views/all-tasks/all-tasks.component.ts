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
    this.tasks = this.dataHandler.getAllTasks();

    console.log(this.tasks);
  }

  showTasksByCategory(category: Category | undefined) {
    this.tasks = this.dataHandler.getTasksByCategory(category);
  }

  showAllTasks() {
    this.tasks = this.dataHandler.getAllTasks();
  }
}
