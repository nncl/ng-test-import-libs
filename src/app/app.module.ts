import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from 'customer-libs/dist/core';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule.forRoot({ apiUrl: 'https://randomuser.me/api/?gender=female' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
