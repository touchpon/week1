import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WtfComponent } from './wtf/wtf.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    
    WtfComponent,
    
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
