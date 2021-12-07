import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-card-top',
    templateUrl: './card-top.page.html',
    styleUrls: ['./card-top.page.scss'],
})
export class CardTopPage implements OnInit {
    list = [
        {
            title: 'Ionic Template App',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula. Fusce at quam a eros malesuada condimentum. Aliquam tincidunt tincidunt vehicula',
            img: 'assets/images/card/52.jpg'
        },
        {
            title: 'Angular 8 App',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula. Fusce at quam a eros malesuada condimentum. Aliquam tincidunt tincidunt vehicula',
            img: 'assets/images/card/51.jpg'
        },
        {
            title: 'Welcome to Ionic',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula. Fusce at quam a eros malesuada condimentum. Aliquam tincidunt tincidunt vehicula',
            img: 'assets/images/card/54.jpg'
        },
        {
            title: 'UI Components',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula. Fusce at quam a eros malesuada condimentum. Aliquam tincidunt tincidunt vehicula',
            img: 'assets/images/card/55.jpg'
        },
        {
            title: 'Ionic Native',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula. Fusce at quam a eros malesuada condimentum. Aliquam tincidunt tincidunt vehicula',
            img: 'assets/images/card/60.jpg'
        },
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
