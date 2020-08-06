import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';
import { ParseTreeResult } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  //paises: any;
  nuevasCanciones: any[] = [];
  loading: boolean;

  constructor( private spotify: SpotifyService ) { 
    console.log('En el constructor del Home');
    //http.get('https://restcountries.eu/rest/v2/lang/es').subscribe(response => {
      //this.paises = response;
    //})

    this.loading = true;

    this.spotify.getNewRelease().subscribe((data: any) => {
        this.nuevasCanciones = data;
        this.loading = false;
    });

  }

  ngOnInit(): void {
  }

}
