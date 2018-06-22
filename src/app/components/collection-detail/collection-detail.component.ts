import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from './../../services/api.service';

@Component({
    selector: 'app-collection-detail',
    templateUrl: './collection-detail.component.html',
    styleUrls: ['./collection-detail.component.scss'],
    providers: [ApiService]
})
export class CollectionDetailComponent implements OnInit {

    result: any = [];
    collection: any = {};
    collectionPhotos: any = [];
    collectionId: number;
    cover: string;

    perPage: number;
    page: number;

    constructor(private api: ApiService, private activeRouter: ActivatedRoute) { }

    ngOnInit() {
        this.perPage = 10;
        this.page = 1;
        this.activeRouter.params.subscribe(params=> {
            this.collectionId = params.id
            this.getCollection(this.collectionId);
            this.getCollectionPhotos();
        })
    }
    getCollection(id){
        this.api.getCollectionData(id).subscribe(
            (res: Response) =>{
                this.collection = res;
                this.cover = this.collection.cover_photo.urls.regular;
            }
        )
    }
    getCollectionPhotos(){
        this.api.getCollectionPhotos(this.collectionId, this.perPage, this.page).subscribe(
            (res: Response) =>{
                this.result = res;
                if(this.result.length > 0){
                    this.collectionPhotos = this.result;
                }
            }
        )
    }

}
