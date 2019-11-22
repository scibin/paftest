import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SongService } from '../services/song.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  @ViewChild('musicFile', { static: false })
  musicFile: ElementRef;

  constructor(private songSvc: SongService, private router: Router) { }

  ngOnInit() {
  }

  uploadSong(form) {
    console.log('This is form', form);
    this.songSvc.uploadSong(form, this.musicFile)
    .then(() => {
      console.info('Song uploaded');
      form.resetForm();
    })
    .catch(error => { console.error('upload error: ', error); });
  }

  goToAllSongs() {
    this.router.navigate(['/songs']);
  }

  goToSelectSong() {
    this.router.navigate(['/song/play']);
  }
}
