import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from './../../services/api.service';

@Component({
    selector: 'app-photos',
    templateUrl: './photos.component.html',
    providers: [ ApiService ]
})
export class PhotosComponent implements OnInit {
    result: any = [];
    photos: any = [];

    @Input() perPage: number;
    @Input() page: number;
    @Input() orderBy: String;

    constructor(private api: ApiService) { }

    ngOnInit() {
        this.listPhotos();
    }
    listPhotos(){
        this.api.getListPhotos(this.perPage, this.page, this.orderBy).subscribe(
            (res: Response)=> {
                this.result = res;
                if(this.result.length > 0){
                    for(var i=0;i<this.perPage;i++){
                        this.photos.push(this.result[i]) ;
                    }
                }
            }
        );
    };
    photosScroll(){
        this.page += 1;
        this.listPhotos();
    }
}
