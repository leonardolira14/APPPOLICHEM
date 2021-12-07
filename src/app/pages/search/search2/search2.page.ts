import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-search2',
    templateUrl: './search2.page.html',
    styleUrls: ['./search2.page.scss'],
})
export class Search2Page implements OnInit {
    active = false;
    gList = [
        {name: 'Charlotte Paul', img: 'assets/images/avatar/15.jpg', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
        {
            name: 'Josephine Lancelot',
            img: 'assets/images/avatar/16.jpg',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {name: 'Tiffany Browning', img: 'assets/images/avatar/14.jpg', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
        {name: 'Rose Augustine', img: 'assets/images/avatar/13.jpg', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
        {name: 'Sabina Barrett', img: 'assets/images/avatar/12.jpg', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
        {name: 'Kitty Lowell', img: 'assets/images/avatar/11.jpg', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
        {name: 'Moira Dillon', img: 'assets/images/avatar/10.jpg', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
    ];
    list = this.gList;

    constructor() {
    }

    ngOnInit() {
    }

    onActive() {
        this.active = !this.active;
    }

    search(event) {
        const key = event.target.value;
        this.list = this.gList.filter(item => item.name.toLowerCase().includes(key.toString().toLowerCase()));
    }
}
