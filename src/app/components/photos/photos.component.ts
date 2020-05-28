import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { Photo } from "./../../models/photo";

@Component({
    selector: 'app-photos',
	templateUrl: './photos.component.html',
	styleUrls: ['./photos.component.scss'],
    providers: [ ApiService ]
})
export class PhotosComponent implements OnInit {
    result: Photo[];
    photos: any = [];

    @Input() perPage: number;
    @Input() page: number;
    @Input() orderBy: string;

    constructor(private api: ApiService) { }

    ngOnInit() {
        this.listPhotos();
    }
    listPhotos() {
        this.api.getListPhotos(this.perPage, this.page, this.orderBy).subscribe(
            (res)=> {
                this.result = res;
                if(this.result.length > 0) {
                    for(let i=0;i<this.perPage;i++) {
                        this.photos.push(this.result[i]) ;
                    }
                }
            }
        );
    };
    photosScroll() {
        this.page += 1;
        this.listPhotos();
    }
}
