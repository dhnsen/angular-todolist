import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from 'src/app/components/todos/todos.component'
import { HelpComponent } from 'src/app/components/pages/help/help.component';

const routes: Routes = [
  { path: '', component: TodosComponent },
  { path: 'help', component: HelpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
