import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './components/upload.component';
import { AvailablesongsComponent } from './components/availablesongs.component';
import { SongslistComponent } from './components/songslist.component';
import { PlaysongComponent } from './components/playsong.component';

const ROUTES: Routes = [
  { path: '', component: UploadComponent },
  { path: 'songs', component: SongslistComponent },
  { path: 'song/play', component: AvailablesongsComponent },
  { path: 'song/play/:id/:user', component: PlaysongComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
