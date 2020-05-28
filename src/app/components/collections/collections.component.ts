import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { Collection } from "./../../models/collection";

@Component({
    selector: 'app-collections',
    templateUrl: './collections.component.html',
    styleUrls: ['./collections.component.scss'],
    providers: [ ApiService ]
})
export class CollectionsComponent implements OnInit {
    result: Collection[];
    collections: any = [];
    perPage: number;
    page: number;
    
    constructor(private api: ApiService) { }

    ngOnInit() {
        this.perPage = 10;
        this.page = 1;
        this.listCollection();
    }
    listCollection(){
        this.api.getCollectionList(this.perPage, this.page).subscribe(
            (res) =>{
                this.result = res;
                if(this.result.length > 0){
                    for(let i=0; i<this.perPage; i++){
                        this.collections.push(this.result[i]) ;
                    }
                }
            }
        )
    }
    collectionScroll(){
        this.page += 1;
        this.listCollection();
    }
}
