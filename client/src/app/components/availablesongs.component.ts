import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SongService } from '../services/song.service';

@Component({
  selector: 'app-availablesongs',
  templateUrl: './availablesongs.component.html',
  styleUrls: ['./availablesongs.component.css']
})
export class AvailablesongsComponent implements OnInit {

  // Array
  availableSongsArray = [];
  // Username
  username = '';

  constructor(private songSvc: SongService, private router: Router) { }

  ngOnInit() {
    this.songSvc.getSongsToPlay()
    .then(result => {
      this.availableSongsArray = result.result;
      console.log(this.availableSongsArray);
    })
    .catch(err => {
      console.log(err);
    })
  }

  playSong(name: string) {
    //
    console.log('Song name is: ', name);
    console.log('User is: ', this.username);
    this.router.navigate(['song/play', name, this.username]);
  }

  adduser(event) {
    console.log(event.value);
  }

  back() {
    this.router.navigate(['/']);
  }
}
