import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ToastProvider} from '../../../shared/providers';

@Component({
    selector: 'app-card2',
    templateUrl: './card2.page.html',
    styleUrls: ['./card2.page.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Card2Page implements OnInit {
    list = [
        {
            title: 'Ionic Template App',
            subTitle: 'cordova app',
            price: '99',
            content: 'Lorem ipsum dolor sit amet',
            img: 'assets/images/card/1.jpg'
        },
        {
            title: 'Angular 8 App',
            subTitle: 'Angular app',
            price: '129',
            content: 'Lorem ipsum dolor sit amet',
            img: 'assets/images/card/3.jpg'
        },
        {
            title: 'UI Components',
            subTitle: 'UI Components',
            price: '56',
            content: 'Lorem ipsum dolor sit amet',
            img: 'assets/images/card/1.jpg'
        },
        {
            title: 'Ionic Native',
            subTitle: 'Ionic plugin',
            price: '78',
            content: 'Lorem ipsum dolor sit amet',
            img: 'assets/images/card/3.jpg'
        },
        {
            title: 'Ionic Framework',
            subTitle: 'ionic 5',
            price: '89',
            content: 'Lorem ipsum dolor sit amet',
            img: 'assets/images/card/1.jpg'
        }
    ];

    constructor(private toastProvider: ToastProvider) {
    }

    ngOnInit() {
    }

    onSelect(item) {
        this.toastProvider.show(JSON.stringify(item));
    }
}
