import { getTestBed } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.scss'],
  providers: [ ApiService]
})
export class PhotoDetailComponent implements OnInit {

    constructor(private api:ApiService, private activeRouter:ActivatedRoute) {}

    photoId : string;
    photo: any = {};

    ngOnInit() {
        this.activeRouter.params.subscribe(params=> {
            this.photoId = params.id
            this.getPhoto(this.photoId);
        })
    }
    getPhoto(id){
        this.api.getPhotoData(id).subscribe(
            (res: Response) =>{
                this.photo = res;
            }
        )
    }
    downloadPhoto(url){
        window.location.href = url;
    }

}
