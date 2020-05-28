import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    constructor(private router: Router) { }

	searchTxt(txt) {
        // replace space with dash
        var stxt = txt.replace(/\s+/g, '-');

        //redirect to search page
        this.router.navigate(['/search/photos/'+ stxt]);
    }
}
