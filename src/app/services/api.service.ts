
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Photo } from "./../models/photo";
import { Collection } from "./../models/collection";
import { Observable } from "rxjs";
@Injectable()

export class ApiService {
    private baseUrl = environment.base_url;
    private isLocal = false;

    constructor(private http: HttpClient) { }

    /* @name  getRandomPhoto
     * @description get random photo
     */
    getRandomPhoto(orientation: string):Observable<Photo> {
        return this.http.get<Photo>(
            this.baseUrl + '/photos/random?orientation='+ orientation
        );
    };

    /* @name  getListPhotos
     * @description get list of photos
     */
    getListPhotos(perPage: number, page: number, orderBy: string):Observable<Photo[]> {
        return this.http.get<Photo[]>(
            this.baseUrl + '/photos/?per_page=' + perPage + '&page='+ page + '&order_by=' + orderBy
        );
    };

    /* @name  getPhotoData
     * @description get details of photo
     */
    getPhotoData(id: string):Observable<Collection> {
        return this.http.get<Collection>(
            this.baseUrl + '/photos/' + id
        );
    };
    /* @name  getSearchResult
     * @description get result of search
     */
    getSearchResult(query: string, perPage: number, page: number):Observable<Photo[]> {
        return this.http.get<Photo[]>(
            this.baseUrl + '/photos/search?query='+ query + '?per_page=' + perPage + '&page=' + page
        );
    }


    /************************************************ collection *********************************************** */
    /* @name  getCollectionList
     * @description get list of collections
     */
    getCollectionList(perPage: number, page: number):Observable<Collection[]> {
        return this.http.get<Collection[]>(
            this.isLocal? 'api/collections.json': this.baseUrl + '/collections?per_page=' + perPage + '&page='+ page
        );
    }

    /* @name  getCollectionData
     * @description get detail of collection
     */
    getCollectionData(id: number): Observable<Collection> {
        return this.http.get<Collection>(
            this.isLocal? 'api/collection.json': this.baseUrl + '/collections/' + id
        );
    }

    /* @name  getCollectionPhotos
     * @description get photos of collection
     */
    getCollectionPhotos(id: number, perPage: number, page: number): Observable<Photo[]> {
        return this.http.get<Photo[]>(
            this.isLocal? 'api/collection_photos.json': this.baseUrl + '/collections/' + id + '/photos?per_page=' + perPage + '&page='+ page
        );
    }
}
