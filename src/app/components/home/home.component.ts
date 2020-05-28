import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { Photo } from "./../../models/photo";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    providers: [ ApiService ]
})
export class HomeComponent implements OnInit {
    rPhoto: Photo;
    randomImg: string;
	constructor(private api: ApiService) { }

    ngOnInit() {
        this.randomPhoto();
	}
	
    randomPhoto() {
		let orientation = "landscape";
        this.api.getRandomPhoto(orientation).subscribe(
            (res)=> {
                this.rPhoto = res;
                this.randomImg = this.rPhoto.urls.regular;
            }
        );
    };
}
