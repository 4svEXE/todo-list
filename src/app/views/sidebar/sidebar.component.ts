import { Component } from "@angular/core";
import { Category } from "src/app/model/Category";
import { DataHandlerService } from "src/app/service/data-handler.service";
import { Task } from "./../../model/Task";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent {
  categories: Category[] = [];
  tasks: Task[] = [];

  constructor(private dataHandler: DataHandlerService) {}

  ngOnInit() {
    this.categories = this.dataHandler.getCategories();
    this.tasks = this.dataHandler.getAllTasks();
  }

  showTasksByCategory(category: Category) {
    this.tasks = this.dataHandler.getTasksByCategory(category);
    
    console.log(" this.tasks", this.tasks);
  }

  showAllTasks() {
    this.tasks = this.dataHandler.getAllTasks();
  }
}
