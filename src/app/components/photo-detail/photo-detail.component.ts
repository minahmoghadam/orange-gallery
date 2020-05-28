import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Collection } from "./../../models/collection";

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.scss'],
  providers: [ ApiService]
})
export class PhotoDetailComponent implements OnInit {

    constructor(private api: ApiService, private activeRouter: ActivatedRoute) {}

    photoId: string;
    photo: Collection;

    ngOnInit() {
        this.activeRouter.params.subscribe(params => {
            this.photoId = params.id
            this.getPhoto(this.photoId);
        })
	}
	
    getPhoto(id: string) {
        this.api.getPhotoData(id).subscribe(
            (res) => {
                this.photo = res;
            }
        )
	}
	
    downloadPhoto(url: string) {
        window.location.href = url;
    }
}
