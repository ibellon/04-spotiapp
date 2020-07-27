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
      Authorization: 'Bearer BQBg6aXAAJXdPJ35TETk6ShP-c2PKjQ7NXeoB01o1b1rX5glRKGtcSl2PyrGTRChtE6f4yS8qHuuTOCGDMY'
    });

    this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
    .subscribe(data => {
      console.log(data);
    });
  }
}
