import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { PostListComponent } from './post-list.component';
import { PostComponent } from './post.component';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DefaultDataServiceConfig, EntityDataModule } from '@ngrx/data';
import { entityConfig } from './entity-metadata';



@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig)
 ],
  declarations: [ PostListComponent, PostComponent ],
  bootstrap:    [ PostListComponent ]
})
export class AppModule { }
