import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GnomeComponent } from './components/gnome/gnome.component';
import { PercPipe } from './pipe/perc.pipe';
import { SexPipe } from './pipe/sex.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GnomeComponent,
    PercPipe,
    SexPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
