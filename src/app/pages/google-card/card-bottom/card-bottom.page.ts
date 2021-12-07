import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-card-bottom',
    templateUrl: './card-bottom.page.html',
    styleUrls: ['./card-bottom.page.scss'],
})
export class CardBottomPage implements OnInit {
    list = [
        {
            title: 'Ionic Template App',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula. Fusce at quam a eros malesuada condimentum. Aliquam tincidunt tincidunt vehicula',
            img: 'assets/images/card/61.jpg'
        },
        {
            title: 'Angular 8 App',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula. Fusce at quam a eros malesuada condimentum. Aliquam tincidunt tincidunt vehicula',
            img: 'assets/images/card/56.jpg'
        },
        {
            title: 'Welcome to Ionic',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula. Fusce at quam a eros malesuada condimentum. Aliquam tincidunt tincidunt vehicula',
            img: 'assets/images/card/57.jpg'
        },
        {
            title: 'UI Components',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula. Fusce at quam a eros malesuada condimentum. Aliquam tincidunt tincidunt vehicula',
            img: 'assets/images/card/59.jpg'
        },
        {
            title: 'Ionic Native',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula. Fusce at quam a eros malesuada condimentum. Aliquam tincidunt tincidunt vehicula',
            img: 'assets/images/card/78.jpg'
        },
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
