import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UploadComponent } from './components/upload.component';
import { SongslistComponent } from './components/songslist.component';
import { AvailablesongsComponent } from './components/availablesongs.component';
import { PlaysongComponent } from './components/playsong.component';


// Manually added
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { SongService } from './services/song.service';
import { RouterModule } from '@angular/router';
// import { NgxAudioPlayerModule } from 'ngx-audio-player';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    SongslistComponent,
    AvailablesongsComponent,
    PlaysongComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    RouterModule
    // NgxAudioPlayerModule
  ],
  providers: [ SongService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
