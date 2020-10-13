import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SquareComponentComponent } from './square-component/square-component.component';
import { BoardComponentComponent } from './board-component/board-component.component';
import { ContainerComponent } from './container/container.component';


import { RouterModule } from '@angular/router';

import { BoardSquareComponent } from './board-square-component/board-square-component.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule,    
   RouterModule.forChild([{ path: '', component: AppComponent }]),
    ],
  declarations: [ AppComponent,   SquareComponentComponent, BoardComponentComponent, ContainerComponent, BoardSquareComponent ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { 


}
