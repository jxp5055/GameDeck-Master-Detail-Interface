import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, GamesComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
