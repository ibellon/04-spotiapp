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
      Authorization: 'Bearer BQDF5A5XdpYDMrEe1FyFDroZi3uFRH7dywAusb1v-aHSESAXaOAUEmFkplo8HoT8gQSi-3nOhxeeH5M3QaTqSgqcQXnXLNBYU-NMMvY4VVysC41X8B99tyL9yLeebBa4P35uG7mCEcfgBZqstizjkRXryiAI7og'
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
