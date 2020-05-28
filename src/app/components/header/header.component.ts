import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    constructor(private router: Router) { }

	searchTxt(txt: string) {
        // replace space with dash
        let stxt = txt.replace(/\s+/g, '-');
        this.router.navigate(['/search/photos/'+ stxt]);
    }
}
