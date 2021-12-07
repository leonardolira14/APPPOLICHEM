import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.page.html',
    styleUrls: ['./card.page.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CardPage implements OnInit {
    list = [
        {
            title: 'Ionic Template App',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula. Fusce at quam a eros malesuada condimentum. Aliquam tincidunt tincidunt vehicula',
            img: 'assets/images/card/1.jpg'
        },
        {
            title: 'Angular 8 App',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula. Fusce at quam a eros malesuada condimentum. Aliquam tincidunt tincidunt vehicula',
            img: 'assets/images/card/3.jpg'
        },
        {
            title: 'Welcome to Ionic',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula. Fusce at quam a eros malesuada condimentum. Aliquam tincidunt tincidunt vehicula',
            img: 'assets/images/card/4.jpg'
        },
        {
            title: 'UI Components',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula. Fusce at quam a eros malesuada condimentum. Aliquam tincidunt tincidunt vehicula',
            img: 'assets/images/card/5.jpg'
        },
        {
            title: 'Ionic Native',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula. Fusce at quam a eros malesuada condimentum. Aliquam tincidunt tincidunt vehicula',
            img: 'assets/images/card/7.jpg'
        },
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
