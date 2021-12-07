import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-card4',
    templateUrl: './card4.page.html',
    styleUrls: ['./card4.page.scss']
})
export class Card4Page implements OnInit {
    list = [
        {
            img: 'assets/images/card/31.jpg',
            title: 'Phuket Island',
            price: 980,
            content: 'if you area planning your first time in Phuket and don\'t know what to do on the island in the days immediately after you arrive',
            child: [
                'assets/images/card/32.jpg',
                'assets/images/card/33.jpg',
                'assets/images/card/34.jpg',
                'assets/images/card/35.jpg',
                'assets/images/card/36.jpg',
                'assets/images/card/37.jpg',
            ]
        },
        {
            img: 'assets/images/card/41.jpg',
            title: 'Japan Kyoto',
            price: 1999,
            content: 'Kyoto  served as Japan\'s capital and the emperor\'s residence from 794 until 1868.',
            child: [
                'assets/images/card/42.jpg',
                'assets/images/card/43.jpg',
                'assets/images/card/44.jpg',
                'assets/images/card/45.jpg',
                'assets/images/card/46.jpg'
            ]
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
