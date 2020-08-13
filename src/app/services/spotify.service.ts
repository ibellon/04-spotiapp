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
      Authorization: 'Bearer BQDd2l5-kCM9IHgi1ZJDzZgufvvwKFFiAfSz0YjsqTEdPeC99mm9-Rw5LkHTkInR_Hpgzt8j-i1sBU640197AoUiPhdRGUcVlmag1muuMvatIshshdWgbimyzbLMUjzcjdOyHIlKWvvhBQxEduaOaCKPdjIdjIU'
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
}
