import {Component, OnInit, ViewChild} from '@angular/core';
import {IonContent} from '@ionic/angular';
import {ScrollDetail} from '@ionic/core';

@Component({
    selector: 'app-go-position',
    templateUrl: './go-position.page.html',
    styleUrls: ['./go-position.page.scss'],
})
export class GoPositionPage implements OnInit {
    @ViewChild(IonContent, {static: true}) content: IonContent;
    list = [
        {img: 'assets/images/card/31.jpg', cate: ' Island', title: 'Phuket Island', subTitle: 'NEW ARRIVALS', price: 29.99},
        {img: 'assets/images/card/32.jpg', cate: ' Island', title: 'Phuket Island', subTitle: 'NEW ARRIVALS', price: 79.99},
        {img: 'assets/images/card/33.jpg', cate: ' Island', title: 'Phuket Island', subTitle: 'NEW ARRIVALS', price: 78.99},
        {img: 'assets/images/card/34.jpg', cate: 'Island', title: 'Phuket Island', subTitle: 'NEW ARRIVALS', price: 79.99},
        {img: 'assets/images/card/35.jpg', cate: ' Island', title: 'Phuket Island', subTitle: 'NEW ARRIVALS', price: 38.99}
    ];

    constructor() {
    }

    ngOnInit() {
    }

    onScroll($event: CustomEvent<ScrollDetail>) {
        if ($event && $event.detail && $event.detail.scrollTop) {
            const scrollTop = $event.detail.scrollTop;
        }
    }

    goPoint() {
        this.content.scrollByPoint(0, 500, 2000);
    }

    goTop() {
        this.content.scrollToTop(2000);
    }

    goBottom() {
        this.content.scrollToBottom(2000);
    }

    goRight() {

        this.content.scrollByPoint(0, 300, 2000);
    }

    goLeft() {
        this.content.scrollByPoint(0, 0, 2000);
    }
}
