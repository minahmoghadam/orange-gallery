import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from './../../services/api.service';

@Component({
    selector: 'app-collections',
    templateUrl: './collections.component.html',
    styleUrls: ['./collections.component.scss'],
    providers: [ ApiService ]
})
export class CollectionsComponent implements OnInit {
    result: any = [];
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
            (res: Response) =>{
                this.result = res;
                for(var i=0; i<this.perPage; i++){
                    this.collections.push(this.result[i]) ;
                }
            }
        )
    }
    collectionScroll(){
        this.page += 1;
        this.listCollection();
    }
}
