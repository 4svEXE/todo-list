import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './views/sidebar/sidebar.component';
import { AllTasksComponent } from './views/all-tasks/all-tasks.component';
import { LearnRxJSComponent } from './views/learn-rx-js/learn-rx-js.component';
import { LearnTypeScriptComponent } from './views/learn-type-script/learn-type-script.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AllTasksComponent,
    LearnRxJSComponent,
    LearnTypeScriptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
