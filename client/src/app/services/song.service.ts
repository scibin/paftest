import { Injectable, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private http: HttpClient) { }

  uploadSong(form: NgForm, fileRef: ElementRef): Promise<any> {
    // Must be multipart/form-data
    const formData = new FormData();
    // Set formdata
    formData.set('username', form.value.username);
    formData.set('song_name', form.value.song_name);
    formData.set('country', form.value.country);
    formData.set('listen_slots', form.value.listen_slots);
    formData.set('lyrics', form.value.lyrics);
    formData.set('musicfile', fileRef.nativeElement.files[0]);
    //
    return (
      this.http.post<any>(`/api/upload`, formData).toPromise()
    );
  }

  // Gets a list of all song info
  getSongs(): Promise<any> {
    return (
      this.http.get<any>('/api/songs/all').toPromise()
    );
  }

  // Get songs available to play
  getSongsToPlay(): Promise<any> {
    return (
      this.http.get<any>('/api/songsplaying').toPromise()
    );
  }

  // !!! Haven't enforced compuslory user input yet
  playSong(song: string, user: string) {
    return (
      this.http.get<any>(`/api/play/${song}/${user}`).toPromise()
    );
  }

  getSong(id: string): Promise<any> {
    return (
      this.http.get<any>(`/api/song/${id}`).toPromise()
    );
  }
}
