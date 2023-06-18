import { Component } from "@angular/core";
import { Category } from "src/app/model/Category";
import { DataHandlerService } from "src/app/service/data-handler.service";


@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent {
  categories: Category[] = [];

  constructor(private dataHandler: DataHandlerService) {}

  ngOnInit() {
    this.categories = this.dataHandler.getCategories();

    console.log(this.categories);
  }
}
