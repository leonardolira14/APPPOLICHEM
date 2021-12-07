import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.page.html',
    styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
    gList = [
        {title: 'Ionic Framework', img: 'assets/images/card/7.jpg', name: 'Truda Vogt', price: 199},
        {title: 'Angular 8', img: 'assets/images/card/56.jpg', name: 'Lillian Hicks', price: 299},
        {title: 'Cordova App', img: 'assets/images/card/57.jpg', name: 'Nick Hudson', price: 399},
        {title: 'Vue App', img: 'assets/images/card/61.jpg', name: 'Ophelia Wagner', price: 499},
        {title: 'Ionic Template', img: 'assets/images/card/3.jpg', name: 'Olga Attlee', price: 599}
    ];
    list = this.gList;

    constructor() {
    }

    ngOnInit() {
    }

    onSearch(event) {
        const key = event.target.value;
        this.list = this.gList.filter(item => item.name.toLowerCase().includes(key.toString().toLowerCase()));
    }

}
