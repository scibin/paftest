import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SongService } from '../services/song.service';

@Component({
  selector: 'app-playsong',
  templateUrl: './playsong.component.html',
  styleUrls: ['./playsong.component.css']
})
export class PlaysongComponent implements OnInit {

  // Username
  username: string;
  // Song name
  song_name: string;
  // Song object ID
  objId: string;
  // Song information
  songInfoArray: any;

  // !!! ngx player doesnt seem to work!!
  // Material Style Basic Audio Player Title and Audio URL
  msbapAudioUrl = `https://abc1234.sgp1.digitaloceanspaces.com/music/${this.songInfoArray.song_file_name}`;   
  msaapDisplayVolumeControls = true;

  msbapDisplayTitle = false;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router, private songSvc: SongService) { }

  ngOnInit() {
    this.song_name = this.activatedRoute.snapshot.params.id;
    this.username = this.activatedRoute.snapshot.params.user;
    // console.log(this.username, this.song_name);
    // Update tables
    // this.songSvc.playSong(this.song_name, this.username)
    // .then(result => {
    //   this.objId = result.result;
    // })
    // .catch(err => {
    //   console.log(err);
    // });
    // Get song information
    this.songSvc.getSong(this.song_name)
    .then(result => {
      this.songInfoArray = result.result[0];
      console.log(this.songInfoArray);
    })
    .catch(err => {
      console.log(err);
    });
  }

  // Back and release the song
  backRelease() {
    // Delete entry in songs_checked_out
    this.router.navigate(['/']);
  }

  // Back to home page
  back() {
    this.router.navigate(['/']);
  }

}
