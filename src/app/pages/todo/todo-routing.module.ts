// Angular modules
import { NgModule }      from '@angular/core';
import { RouterModule }  from '@angular/router';
import { Routes }        from '@angular/router';

// Components
import { TodoComponent } from './todo.component';

const routes: Routes = [
  { path : '', component : TodoComponent },
];

@NgModule({
  imports : [ RouterModule.forChild(routes) ],
  exports : [ RouterModule ]
})
export class TodoRoutingModule { }
