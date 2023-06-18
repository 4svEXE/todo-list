import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './views/sidebar/sidebar.component';
import { CategoriesComponent } from './views/categories/categories.component';
import { AllTasksComponent } from './views/all-tasks/all-tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CategoriesComponent,
    AllTasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
