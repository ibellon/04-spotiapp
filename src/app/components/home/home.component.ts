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
  error: boolean;
  mensajeError: string;

  constructor( private spotify: SpotifyService ) { 
    console.log('En el constructor del Home');
    //http.get('https://restcountries.eu/rest/v2/lang/es').subscribe(response => {
      //this.paises = response;
    //})

    this.loading = true;
    this.error = false;

    this.spotify.getNewRelease().subscribe((data: any) => {
        this.nuevasCanciones = data;
        this.loading = false;
      }, (errorServicio) => {
        this.error = true;
        this.loading = false;
        this.mensajeError = errorServicio.error.error.message;
    });

  }

  ngOnInit(): void {
  }

}
