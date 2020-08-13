import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [
  ]
})
export class ArtistComponent implements OnInit {

  artista: any = {};

  constructor(private activatedRoute: ActivatedRoute, private spotifyService: SpotifyService) { 
    this.activatedRoute.params.subscribe(data => {
      console.log(this.getArtista(data.id));
    })
  }

  ngOnInit(): void {
  }
  
  getArtista(id: string) {
    this.spotifyService.getArtista(id).subscribe(artista => {
     console.log(artista);
    this.artista = artista;
     });

  }
}
