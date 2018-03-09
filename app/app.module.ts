
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TestComponent }  from './test.component';
import { AppComponent }  from './app.component';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list';
import { SearchComponent } from './search';
import { AddComponent } from './addup';
import { routes } from './routes';

import { HttpModule } from '@angular/http';

@NgModule({
  imports:      [ BrowserModule,HttpModule,RouterModule.forRoot(routes) ],
  declarations: [ AppComponent,TestComponent,ListComponent,SearchComponent,AddComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { } 