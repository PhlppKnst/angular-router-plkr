import { NgModule } from '@angular/core';
import { ModuleAComponent } from './module-a.component';
import { moduleARoute } from './module-a.router';
import { RouterModule } from '@angular/router';
 
@NgModule({
  imports: [
    RouterModule.forChild(moduleARoute)
  ],
  declarations: [ModuleAComponent]
})
export class ModuleAModule { }
