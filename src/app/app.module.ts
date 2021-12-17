import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconComponent } from './conponents/icon/icon.component';

//font-awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//toastr
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [AppComponent, IconComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule, //animation module
    ToastrModule.forRoot(), //adding toastr module
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
