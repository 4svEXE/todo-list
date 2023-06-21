import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTasksComponent } from './views/all-tasks/all-tasks.component';
import { LearnRxJSComponent } from './views/learn-rx-js/learn-rx-js.component';
import { LearnTypeScriptComponent } from './views/learn-type-script/learn-type-script.component';


const routes: Routes = [
  {path:"", component: AllTasksComponent},
  {path:"learn-Rx-JS", component: LearnRxJSComponent},
  {path:"learn-Type-Script", component: LearnTypeScriptComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
