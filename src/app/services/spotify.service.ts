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
      Authorization: 'Bearer BQAS3ujACvr8Tusnp2f1hkakFZ_axJ2sKpb0BgJovEEk8mBnWWXRrt5laih0LT_JGxCQ_XgCN5vXgeX-dX0'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
  }
}
