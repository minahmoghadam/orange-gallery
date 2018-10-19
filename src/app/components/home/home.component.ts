import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './../../services/api.service';
import { Router } from '@angular/router';
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
    constructor(private api: ApiService, private router: Router) { }

    ngOnInit() {
        this.randomPhoto();
    }
    searchTxt(txt){
        // replace space with dash
        var stxt = txt.replace(/\s+/g, '-');

        //redirect to search page
        this.router.navigate(['/search/photos/'+ stxt]);
    }
    randomPhoto(){
        var orientation = "landscape";
        this.api.getRandomPhoto(orientation).subscribe(
            (res)=> {
                this.rPhoto = res;
                this.randomImg = this.rPhoto.urls.thumb;
            }
        );
    };

}
