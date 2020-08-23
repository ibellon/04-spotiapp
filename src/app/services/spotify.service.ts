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
      Authorization: 'Bearer BQAq7MsWjaVUP4m0KuCPZWE9Gw1471zIlAuIIAe2hROL1T5hgUbuVvjz_s4WxCjnTnlFEeLcfA1gmfxef8WGXB2n3uYAtbXjsjD70-efaxPb6Y_ccm719OKsonLP3GsQXlXQqM5aAOFG1l6OMlMQSCQMZ2dEEc0'
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
