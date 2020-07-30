import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
    console.log("Servicio Spotify Listo");
  }

  getNewRelease(){
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQC5aM6cqa5cHne4QHTKqohim0J5dO_EzuO3x6CfsaaE0PpyRtcqfoKsXTKPS8fJ230AIb_lvkfLQzAKnAo'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
  }

  getArtista(termino: string){
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQC5aM6cqa5cHne4QHTKqohim0J5dO_EzuO3x6CfsaaE0PpyRtcqfoKsXTKPS8fJ230AIb_lvkfLQzAKnAo'
    });

    return this.http.get('https://api.spotify.com/v1/search?q=' + termino + '&type=artist', {headers});
  }
}
