import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [
  ]
})
export class ArtistComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.params.subscribe(data => {
      console.log(data.id);
    })
  }

  ngOnInit(): void {
  }

}
