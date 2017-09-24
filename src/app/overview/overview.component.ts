import { SpotifyService } from '../webservices/spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
    constructor(private spotifyService: SpotifyService) { }

    ngOnInit() {
        // this.getSpotifyStatus();
     }

    getSpotifyStatus() {
        this.spotifyService.getStatus().subscribe(
            res => {
                console.log(res);
            },
            error => {
                console.log(error);
            }
        );
    }
}
