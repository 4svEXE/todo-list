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

    // subscribe - observe the data
    this.dataHandler.taskSubject.subscribe(tasks => this.tasks = tasks);
  }

  ngAfterContentInit(){

  }

  showTasksByCategory(category: Category | undefined) {
    this.dataHandler.fillTasksByCategory(category);
  }

  showAllTasks() {
    this.dataHandler.fillAllTasks();
  }

  updateCategorySize(category: Category) {
    this.dataHandler.updateCategorySize(category)
  }

  showAllTasksLength(): Number {
    return this.dataHandler.getTasksLength()
  }
}
