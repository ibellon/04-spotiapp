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

  getNewRelease(){
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQDSVHWHjrnxNyIcHFr9qrGA2lu6q3opuc_bkj0I85rQI6R8f4w3W6mvli95ARao_vpD_5AkarKd_QusYjg'
    });

    return this.http.get(
      'https://api.spotify.com/v1/browse/new-releases', {headers})
      .pipe( map( (data: any) => data.albums.items));
  }

  getArtista(termino: string){
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQDSVHWHjrnxNyIcHFr9qrGA2lu6q3opuc_bkj0I85rQI6R8f4w3W6mvli95ARao_vpD_5AkarKd_QusYjg'
    });

    return this.http.get(
      'https://api.spotify.com/v1/search?q=' + termino + '&type=artist', {headers})
      .pipe( map( (data: any) => data.artists.items));
  }
}
