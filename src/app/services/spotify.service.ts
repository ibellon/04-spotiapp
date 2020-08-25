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
      Authorization: 'Bearer BQB9x3BKWos3f8yMQ3cfHYgfSByVVWe72V-2emUhbJZCtWNP2sziR1AKrLecze1s1c_ZDa5vp2n9_9vTdZbEiTRDiB29j9cpIz16Ny8wcShfCnT0xJC1IDS61bvSEXhXmdukI2ATIxOLXH9pPjPBMbcEn8t-eo8'
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
