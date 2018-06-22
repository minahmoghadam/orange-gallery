
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
@Injectable()

export class ApiService {
    private baseUrl = environment.base_url;
    private isLocal = false;

    constructor(private http: HttpClient) { }

    /* @name  getRandomPhoto
     * @description get random photo
     */
    getRandomPhoto(orientation){
        return this.http.get(
            this.baseUrl + '/photos/random?orientation='+ orientation
        );
    };

    /* @name  getListPhotos
     * @description get list of photos
     */
    getListPhotos(perPage, page, orderBy){
        return this.http.get(
            this.baseUrl + '/photos/?per_page=' + perPage + '&page='+ page + '&order_by='+ orderBy
        );
    };

    /* @name  getPhotoData
     * @description get details of photo
     */
    getPhotoData(id){
        return this.http.get(
            this.baseUrl + '/photos/'+id
        );
    };
    /* @name  getSearchResult
     * @description get result of search
     */
    getSearchResult(query, perPage, page){
        return this.http.get(
            this.baseUrl + '/photos/search?query='+ query + '?per_page=' + perPage + '&page='+ page
        );
    }


    /************************************************ collection *********************************************** */
    /* @name  getCollectionList
     * @description get list of collections
     */
    getCollectionList(perPage, page){
        return this.http.get(
            this.isLocal? 'api/collections.json': this.baseUrl + '/collections/curated?per_page=' + perPage + '&page='+ page
        );
    }

    /* @name  getCollectionData
     * @description get detail of collection
     */
    getCollectionData(id){
        return this.http.get(
            this.isLocal? 'api/collection.json': this.baseUrl + '/collections/curated/'+ id
        );
    }

    /* @name  getCollectionPhotos
     * @description get photos of collection
     */
    getCollectionPhotos(id, perPage, page){
        return this.http.get(
            this.isLocal? 'api/collection_photos.json': this.baseUrl + '/collections/curated/'+ id + '/photos?per_page=' + perPage + '&page='+ page
        );
    }
}
