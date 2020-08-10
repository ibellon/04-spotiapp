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
      Authorization: 'Bearer BQDcpAmp0yAteA4-b6dw4dCEQP-rkd4xE8CYkD0ToLq8GuTIDHDmc0iwuPooIdOMkEFlrk9OkMO6xj2GE5HiTZ4uS8QWIYMQABz-bvXxO-1LeX-cvLXFZgZe-FvqW1fWm45Y9SonqHWdcfTgu2w5ihGyKrKHJYk'
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
