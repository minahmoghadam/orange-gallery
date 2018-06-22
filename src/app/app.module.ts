import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ZoomModule } from 'angular-zoom';

import { Auth } from './interceptors/auth'

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { HeaderComponent } from './components/header/header.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { PhotosComponent } from './components/photos/photos.component';
import { CollectionDetailComponent } from './components/collection-detail/collection-detail.component';
import { PhotoComponent } from './components/photo/photo.component';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SearchComponent,
        HeaderComponent,
        CollectionsComponent,
        PhotosComponent,
        CollectionDetailComponent,
        PhotoComponent,
        PhotoDetailComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        InfiniteScrollModule,
        AngularFontAwesomeModule,
        ZoomModule
    ],
    providers: [
        CookieService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: Auth,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
