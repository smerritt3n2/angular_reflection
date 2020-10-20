import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { SpellsComponent } from './spells/spells.component';
import { MonstersComponent } from './monsters/monsters.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SpellsComponent,
    MonstersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
