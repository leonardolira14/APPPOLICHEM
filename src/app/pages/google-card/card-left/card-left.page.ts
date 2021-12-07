import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-card-left',
    templateUrl: './card-left.page.html',
    styleUrls: ['./card-left.page.scss'],
})
export class CardLeftPage implements OnInit {
    list = [
        {
            title: 'Ionic Template App',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula. Fusce at quam a eros malesuada condimentum. Aliquam tincidunt tincidunt vehicula',
            img: 'assets/images/card/37.jpg'
        },
        {
            title: 'Angular 8 App',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula. Fusce at quam a eros malesuada condimentum. Aliquam tincidunt tincidunt vehicula',
            img: 'assets/images/card/36.jpg'
        },
        {
            title: 'Welcome to Ionic',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula. Fusce at quam a eros malesuada condimentum. Aliquam tincidunt tincidunt vehicula',
            img: 'assets/images/card/35.jpg'
        },
        {
            title: 'UI Components',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula. Fusce at quam a eros malesuada condimentum. Aliquam tincidunt tincidunt vehicula',
            img: 'assets/images/card/34.jpg'
        },
        {
            title: 'Ionic Native',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula. Fusce at quam a eros malesuada condimentum. Aliquam tincidunt tincidunt vehicula',
            img: 'assets/images/card/33.jpg'
        },
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
