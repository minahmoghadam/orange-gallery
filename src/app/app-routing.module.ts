import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { HomeComponent } from './components/home/home.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { CollectionDetailComponent } from './components/collection-detail/collection-detail.component';
import { SearchComponent } from './components/search/search.component';
import { PhotoDetailComponent } from './components/photo-detail/photo-detail.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'collections', component: CollectionsComponent},
    {path: 'collection/:id', component: CollectionDetailComponent},
    {path: 'photo/:id', component: PhotoDetailComponent},
    {path: 'search/photos/:keyword', component: SearchComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports:[RouterModule],
    declarations: [],
})
export class AppRoutingModule {}
