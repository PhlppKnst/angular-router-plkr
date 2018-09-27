import { NgModule } from '@angular/core';
import { ModuleBComponent } from './module-b.component';
import { RouterModule } from '@angular/router';
import { moduleARoute } from './module-b.router'

@NgModule({
  imports: [
    RouterModule.forChild(moduleARoute)
  ],
  declarations: [ModuleBComponent]
})
export class ModuleBModule { }
