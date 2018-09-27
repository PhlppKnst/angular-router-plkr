import {Routes} from '@angular/router'
import { ModuleAComponent } from './module-a.component';

export const moduleARoute: Routes = [
    {
        path:'moduleA',
        component:ModuleAComponent,
        outlet:'moduleA'
    }
]