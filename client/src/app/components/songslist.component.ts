import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SongService } from '../services/song.service';

@Component({
  selector: 'app-songslist',
  templateUrl: './songslist.component.html',
  styleUrls: ['./songslist.component.css']
})
export class SongslistComponent implements OnInit {

  // Initialize song array
  songsArray = [];

  constructor(private songSvc: SongService, private router: Router) { }

  ngOnInit() {
    // Get all songs
    this.songSvc.getSongs()
    .then(result => {
      this.songsArray = result.songArray;
    })
    .catch();
  }

  back() {
    this.router.navigate(['/']);
  }

}
