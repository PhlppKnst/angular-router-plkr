import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {ModuleAModule} from './module-a/module-a.module'
import {ModuleBModule} from './module-b/module-b.module'
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,ModuleAModule,ModuleBModule,
    RouterModule.forRoot(
      [
        {
          path:'',
          component:AppComponent
        }
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
