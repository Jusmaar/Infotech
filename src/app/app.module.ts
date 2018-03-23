import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';

import { HttpClient } from './services/config/http-client.service';
import { UserService } from './services/user.service';
import { ListadoComponent } from './components/listado/listado.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    HttpClient,    
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
