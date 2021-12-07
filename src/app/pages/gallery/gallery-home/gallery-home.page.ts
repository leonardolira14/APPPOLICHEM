import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-gallery-home',
    templateUrl: './gallery-home.page.html',
    styleUrls: ['./gallery-home.page.scss'],
})
export class GalleryHomePage implements OnInit {
    list = [
        {img: 'assets/images/card/31.jpg', title: 'Ionic App', quantity: 18},
        {img: 'assets/images/card/34.jpg', title: 'Ionic Template', quantity: 18},
        {img: 'assets/images/card/41.jpg', title: 'Angular App', quantity: 18},
        {img: 'assets/images/card/60.jpg', title: 'Cordova', quantity: 18},
        {img: 'assets/images/card/46.jpg', title: 'Ionic Framework', quantity: 18}
    ];

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    onSelect(item) {
        this.router.navigateByUrl('/gallery/gallery-list/' + item.title);
    }

}
