/*
* http://usejsdoc.org/
*/
import { Routes } from '@angular/router';
import { ListComponent } from './list';
import { SearchComponent } from './search';
import { AddComponent } from './addup';


export const routes:Routes=[{path:'list',component:ListComponent},
                            {path:'search',component:SearchComponent},
                            {path:'add',component:AddComponent}
                           ];