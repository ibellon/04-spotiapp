import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Servicio Spotify Listo');
  }

  getQuery(query: string){

    const url = 'https://api.spotify.com/v1/' + query;

    console.log('URL: ' + url);

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQA85ZCuU1f5hXT8QOy9QKOM1ysv7a36Xbw5Q7EFEJdUbJQlg5lAL4xn3qFPMNCePxhU5ydcDLlg9O_L34ddN8fZvWDvYsF-dKv-rJFXiQ1y8WoLN44xle_LFVEZi7-T6wCF8SazwTd2zZQ90WgzNNie5Eth8Xw'
    });

    return this.http.get(url, { headers });
  }

  getNewRelease(){
    return this.getQuery('browse/new-releases')
      .pipe( map( (data: any) => data.albums.items));
  }

  getArtista(termino: string){
    return this.getQuery('search?q=' + termino + '&type=artist')
    .pipe( map( (data: any) => data.artists.items));
  }
}
