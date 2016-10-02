import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BananasComponent } from './bananas/bananas.component';
import { GetBananasComponent } from './get-bananas/get-bananas.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BananasComponent,
    GetBananasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
