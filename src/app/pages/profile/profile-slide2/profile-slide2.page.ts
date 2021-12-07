import {Component, OnInit, ViewChild} from '@angular/core';
import {IonContent} from '@ionic/angular';
import {ScrollDetail} from '@ionic/core';

@Component({
    selector: 'app-profile-slide2',
    templateUrl: './profile-slide2.page.html',
    styleUrls: ['./profile-slide2.page.scss'],
})
export class ProfileSlide2Page implements OnInit {
    @ViewChild(IonContent, {static: true}) content: IonContent;
    isEnd = false;

    user = {
        img: 'assets/images/avatar/13.jpg',
        name: 'Adela Obadiah',
        intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est.'
    };

    list = [
        {
            img: 'assets/images/card/59.jpg',
            title: 'Ionic News',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est.'
        },
        {
            img: 'assets/images/profile/9.jpg',
            title: 'Ionic News',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est.'
        },
        {
            img: 'assets/images/profile/8.jpg',
            title: 'Ionic News',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est.'
        },
    ];

    constructor() {
    }

    ngOnInit() {
    }

    onScroll($event: CustomEvent<ScrollDetail>) {
        if ($event && $event.detail && $event.detail.scrollTop) {
            const scrollTop = $event.detail.scrollTop;
            this.isEnd = scrollTop >= 10;
        }
    }

    goTop() {
        this.content.scrollToTop(2000);
    }

}
