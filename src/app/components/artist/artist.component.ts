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

  artista: any;
  imageArtista: any;
  nameArtista: string;
  urlArtista: string;
  loadingArtista: boolean;

  constructor(private activatedRoute: ActivatedRoute, private spotifyService: SpotifyService) { 
    this.activatedRoute.params.subscribe(data => {
      console.log(this.getArtista(data.id));
    })
  }

  ngOnInit(): void {
  }
  
  getArtista(id: string) {
    this.loadingArtista = true;
    this.spotifyService.getArtista(id)
      .subscribe(artista => {
        this.loadingArtista = false;
        this.imageArtista = artista['images'];
        this.nameArtista = artista['name'];
        this.urlArtista = artista['external_urls'].spotify;
        console.log(artista)
      });
  }
}
