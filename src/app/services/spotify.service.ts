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
      Authorization: 'Bearer BQBQPwKqGTi6aTI5NNwUKZfZxH0G_U8OrISwWWU6lON6a1az8sXas8HoU9ZV0co2lyS3humHklLe3cwBfXEA8RV9yIlVtQPy2HOPZLKaL6dkZmi5RNBPJNjhC6i_Re42hfo0FpS5hC_8Iud1yZ8Wuy_Opx84xrU'
    });

    return this.http.get(url, { headers });
  }

  getNewRelease(){
    return this.getQuery('browse/new-releases')
      .pipe( map( (data: any) => data.albums.items));
  }

  getArtistas(termino: string){
    return this.getQuery('search?q=' + termino + '&type=artist')
    .pipe( map( (data: any) => data.artists.items));
  }

  getArtista(id: string){
    return this.getQuery('artists/'+id);
    //.pipe( map( (data: any) => data.artists.items));
  }

  getTopTracks(id: string){
    return this.getQuery('artists/'+id+'/top-tracks?country=us')
    .pipe( map( (data: any) => data.tracks));
  }
}
