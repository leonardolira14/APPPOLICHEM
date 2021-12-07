import {Component, OnInit, ViewChild} from '@angular/core';
import {IonContent} from '@ionic/angular';
import {ScrollDetail} from '@ionic/core';

@Component({
    selector: 'app-go-bottom',
    templateUrl: './go-bottom.page.html',
    styleUrls: ['./go-bottom.page.scss'],
})
export class GoBottomPage implements OnInit {
    @ViewChild(IonContent, {static: true}) content: IonContent;
    isEnd = false;
    list = [
        {img: 'assets/images/card/8.jpg', cate: 'WOMEN', title: 'Puffer Jacket', subTitle: 'NEW ARRIVALS', price: 29.99},
        {img: 'assets/images/card/2.jpg', cate: 'WOMEN', title: 'Sleeve Henley', subTitle: 'NEW ARRIVALS', price: 79.99},
        {img: 'assets/images/card/5.jpg', cate: 'WOMEN', title: 'Sweater', subTitle: 'NEW ARRIVALS', price: 78.99},
        {img: 'assets/images/card/7.jpg', cate: 'WOMEN', title: 'Skinny Jeans', subTitle: 'NEW ARRIVALS', price: 79.99},
        {img: 'assets/images/card/5.jpg', cate: 'WOMEN', title: 'Puffer Jacket', subTitle: 'NEW ARRIVALS', price: 38.99}
    ];

    constructor() {
    }

    ngOnInit() {
    }

    onScroll($event: CustomEvent<ScrollDetail>) {
        if ($event && $event.detail && $event.detail.scrollTop) {
            const scrollTop = $event.detail.scrollTop;
            this.isEnd = scrollTop <= 10;
        }
    }

    goTop() {
        this.content.scrollToBottom(2000);
    }

}
